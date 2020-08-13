import * as config from "../config";
import * as requester from "../Utils/Requester";
import { Issue_comment, Issue } from "../GithubApi";
import ClassHandeler from "../Classes/ClassHandeler";
export = class {
  MergeOptions: config.MergeOptions;
  ClientOptions: config.ClientOptions;
  constructor(
    MergeOptions: config.MergeOptions,
    ClientOptions: config.ClientOptions
  ) {
    this.MergeOptions = MergeOptions;
    this.ClientOptions = ClientOptions;
  }
  public async exec(data): Promise<void> {
    const IssueComment: Issue_comment = new ClassHandeler._IssueComment(
      data.comment
    );
    const Issue: Issue = new ClassHandeler._Issue(data.issue);
    if (!Issue.pull_request) return;
    if (Issue.locked) return;
    const res = await requester.get(Issue.pull_request.url);
    const PR = new ClassHandeler._PullRequest(res, this.ClientOptions.token);
    if (!(await PR.checkIfApproved(this.MergeOptions.approve_label)))return;
    if (IssueComment.user.id !== PR.user.id) return;
    if (!PR.checkIfMergable) {
      if (this.MergeOptions.mentions) {
        PR.comment(
          `@${PR.user.login}` + this.MergeOptions.merge_conflict_comemnt
        );
      } else PR.comment(this.MergeOptions.merge_conflict_comemnt);
      return;
    }
    if (IssueComment.body === this.MergeOptions.merge_confirm_comment) {
      if (typeof this.MergeOptions.commit_title !== "string")
        this.MergeOptions.commit_title = `Merged PR #${PR.number}`;
      PR.merge(this.MergeOptions.commit_title);
    }
  }
};
