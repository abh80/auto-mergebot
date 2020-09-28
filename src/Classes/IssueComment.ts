import {User,Issue_comment} from '../GithubApi'
import _User from './User'
export default class implements Issue_comment{
    url: string;
    html_url: string;
    issue_url: string;
    id: number;
    node_id: string;
    user: User;
    body: string;
    constructor(data) {
      this.url = data.url;
      this.issue_url = data.issue_url;
      this.html_url = data.html_url;
      this.id = data.id;
      this.node_id = data.node_id;
      this.user = new _User(data.user);
      this.body = data.body;
    }
  }
  