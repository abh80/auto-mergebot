import { Labels, User, Issue } from "../GithubApi";
import _User from "./User";
import _Repo from "./Repo";
export default class implements Issue {
  url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: Labels[];
  state: "open" | "closed";
  locked: boolean;
  assignee: User;
  assignees: User[];
  comments: number;
  pull_request?: {
    url: string;
    html_url: string;
    diff_url: string;
    patch_url: string;
  };
  constructor(data) {
    if (data.pull_request) this.pull_request = data.pull_request;
    this.url = data.url;
    this.labels_url = data.labels_url;
    this.comments_url = data.comments_url;
    this.events_url = data.events_url;
    this.html_url = data.html_url;
    this.id = data.id;
    this.node_id = data.node_id;
    this.number = data.number;
    this.title = data.title;
    this.user = data.user;
    this.labels = data.labels;
    this.state = data.state;
    this.locked = data.locked;
    this.assignee = data.assignee;
    this.assignees = data.assignees;
    this.comments = data.comments;
  }
  checkIfApproved(label: string): boolean {
    if (this.labels.find((x) => x.name.toLowerCase() === label)) return true;
    else return false;
  }
}
