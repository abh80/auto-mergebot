// exporting Github Api Interfaces
export interface Repo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: User;
  url: string;
}
export interface User {
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
}
export interface Issue {
  url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number; //important for commenting to PRs
  title: string;
  user: User;
  labels: Labels[] | undefined;
  state: "open" | "closed";
  locked: boolean;
  assignee: User | null;
  assignees: User[];
  comments: number;
  pull_request?: {
    url: string;
    html_url: string;
    diff_url: string;
    patch_url: string;
  };
}
export interface pull_request {
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
}
export interface PRfunctions extends pull_request {
  comment(text: string): void;
  checkIfApproved(label: string): Promise<boolean>;
  checkIfMerged(): boolean;
  checkAuthor(User: User): boolean;
  merge(commit_title: string): void;
  ParseReview(data: Pr_Review[]): boolean;
  addLabel(label: string): Promise<void>;
}
export interface Pr_Review {
  id: number;
  node_id: string;
  user: User;
  body: string;
  state: "APPROVED" | "CHANGES_REQUESTED" | "COMMENTED";
  html_url: string;
  pull_request_url: string;
  author_association: string;
}
export interface Pr_ReviewFunction extends Pr_Review {
  checkToBeApproved(): boolean;
}
export interface Issue_comment {
  url: string;
  html_url: string;
  issue_url: string;
  id: number;
  node_id: string;
  user: User;
  body: string;
}
export interface Labels {
  url: string;
  name: string;
  color: string;
}
export type MergeableState =
  | "dirty"
  | "unknown"
  | "blocked"
  | "behind"
  | "unstable"
  | "has_hooks"
  | "clean";
export type statuses = "success" | "pending" | "failure" | "error";
export interface CombinedStats {
  state: statuses;
  sha: string;
  total_count: number;
  repo: Repo;
  statuses: commit_status[];
}
export interface commit_status {
  url: string;
  id: number;
  node_id: string;
  state: statuses;
  description: string;
}
