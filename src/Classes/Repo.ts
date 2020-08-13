import { User, Repo } from "../GithubApi";
import _User from "./User";
export default class implements Repo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: User;
  url: string;
  constructor(data) {
    this.id = data.id;
    this.node_id = data.node_id;
    this.name = data.name;
    this.full_name = data.full_name;
    this.private = data.private;
    this.owner = new _User(data.owner);
    this.url = data.url;
  }
}
