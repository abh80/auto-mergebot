import ClassHandeler from "../Classes/ClassHandeler";
import { PRfunctions, Pr_ReviewFunction } from "../GithubApi";
import * as config from "../config";
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
  public async exec(data: any): Promise<void> {
    const PRReview: Pr_ReviewFunction = new ClassHandeler._PullRequestReview(
      data.review
    );
    if (!PRReview.checkToBeApproved()) return;
    const PR: PRfunctions = new ClassHandeler._PullRequest(
      data.pull_request,
      this.ClientOptions.token
    );
    if (PR.state !== "open") return;
    if (PR.locked) return;
    await PR.addLabel(this.MergeOptions.approve_label);
    if (this.MergeOptions.mentions) {
      PR.comment(
        `@` + PR.user.login + "," + this.MergeOptions.merge_ask_comment
      );
    } else PR.comment(this.MergeOptions.merge_ask_comment);
  }
};
