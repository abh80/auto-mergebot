import { Pr_Review, User } from "../GithubApi";
import _User from "./User";
export default class implements Pr_Review {
  id: number;
  node_id: string;
  user: User;
  body: string;
  state: "APPROVED" | "CHANGES_REQUESTED" | "COMMENTED";
  html_url: string;
  pull_request_url: string;
  author_association: string;
  constructor(data) {
    this.id = data.id;
    this.node_id = data.node_id;
    this.user = new _User(data.user);
    this.body = data.body;
    this.state = data.state;
    this.pull_request_url = data.pull_request_url;
    this.author_association = data.author_association;
  }
  checkToBeApproved(){
      if(this.state.toUpperCase() !== 'APPROVED')return false;
      if(this.author_association === 'OWNER' || this.author_association === 'COLLABORATOR')return true;
      else return false;
  }
}
