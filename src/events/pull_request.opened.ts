import * as config from "../config";
import { PRfunctions } from "../GithubApi";
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
  public exec(data): void {
    const PR: PRfunctions = new ClassHandeler._PullRequest(data.pull_request,this.ClientOptions.token);
    if(this.MergeOptions.mentions){
      PR.comment(`@${PR.user.login},`+ this.MergeOptions.on_create_comment)
    }
    else PR.comment(this.MergeOptions.on_create_comment);
  }
};
