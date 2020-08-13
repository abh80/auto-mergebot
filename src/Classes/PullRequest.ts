import {
  Labels,
  User,
  Repo,
  MergeableState,
  pull_request,
  Pr_Review,
} from "../GithubApi";
import _Repo from "./Repo";
import _User from "./User";
import _PullRequestReview from "./PullRequestReview";
import * as requester from "../Utils/Requester";
export default class implements pull_request {
  url: string;
  id: number;
  node_id: string;
  html_url: string;
  issue_url: string;
  number: 1;
  state: "open" | "closed";
  locked: boolean;
  title: string;
  user: User;
  body: string;
  assignee: User | null;
  merged: boolean;
  comments: number;
  author_association: string;
  base: Repo;
  head: Repo;
  labels: Labels[] | undefined;
  comments_url: string;
  statuses_url: string;
  mergeable_state: MergeableState;
  token: string;
  constructor(data, token) {
    this.url = data.url;
    this.id = data.id;
    this.node_id = data.node_id;
    this.html_url = data.html_url;
    this.issue_url = data.issue_url;
    this.number = data.number;
    this.state = data.state;
    this.locked = data.locked;
    this.title = data.title;
    this.user = new _User(data.user);
    this.body = data.body;
    this.assignee = data.assignee;
    this.merged = data.merged;
    this.comments = data.comments;
    this.author_association = data.author_association;
    this.base = new _Repo(data.base.repo);
    this.head = new _Repo(data.head.repo);
    this.labels = data.labels;
    this.statuses_url = data.statuses_url;
    this.comments_url = data.comments_url;
    this.mergeable_state = data.mergeable_state;
    this.token = token;
  }
  async checkIfApproved(label: string): Promise<boolean> {
    if (this.labels.find((x) => x.name.toLowerCase() === label)) return true;
    const res: Pr_Review[] = await requester.get(this.url + "/reviews");
    return this.ParseReview(res);
  }
  checkIfMerged(): boolean {
    return this.merged;
  }
  comment(text: string): void {
    const body = {
      body: text,
    };
    const options: requester.Options = {
      token: this.token,
      body: body,
      method: "POST",
      url: this.comments_url,
    };
    requester.request(options);
  }
  checkAuthor(User: User): boolean {
    if (this.user.id === User.id) return true;
    else return false;
  }
  checkIfMergable() {
    if (this.mergeable_state === "clean") return true;
    else return false;
  }
  merge(commit_title: string): void {
    if (!this.checkIfApproved) return;
    let options: requester.Options = {
      token: this.token,
      body: {
        commit_title: commit_title,
      },
      method: "PUT",
      url: this.url + "/merge",
    };
    requester.request(options);
  }
  async addLabel(label: string): Promise<void> {
    let options: requester.Options = {
      method: "POST",
      url: this.issue_url + "/labels",
      token: this.token,
      body: {
        labels: [label],
      },
    };
    requester.request(options);
  }
  ParseReview(data: Pr_Review[]): boolean {
    for (let i = 0; i < data.length; i++) {
      let PRReview: Pr_Review = new _PullRequestReview(data[i]);
      if (
        PRReview.state === "APPROVED" &&
        (PRReview.author_association === "OWNER" ||
          PRReview.author_association === "COLLABORATOR")
      )
        return true;
    }
  }
}
