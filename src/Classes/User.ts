import {User} from '../GithubApi'
export default class implements User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: "User";
  site_admin: boolean;
  constructor(data) {
    this.login = data.login;
    this.id = data.id;
    this.node_id = data.node_id;
    this.avatar_url = data.avatar_url;
    this.gravatar_id = data.gravatar_id;
    this.url = data.url;
    this.html_url = data.html_url;
    this.followers_url = data.followers_url;
    this.following_url = data.following_url;
    this.gists_url = data.gists_url;
    this.starred_url = data.starred_url;
    this.subscriptions_url = data.subscriptions_url;
    this.organizations_url = data.organizations_url;
    this.repos_url = data.repos_url;
    this.events_url = data.events_url;
    this.received_events_url = data.received_events_url;
    this.type = "User";
    this.site_admin = data.site_admin;
  }
}
