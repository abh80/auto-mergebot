import { Labels, User, Repo, MergeableState, pull_request, Pr_Review } from "../GithubApi";
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
    constructor(data: any, token: any);
    checkIfApproved(label: string): Promise<boolean>;
    checkIfMerged(): boolean;
    comment(text: string): void;
    checkAuthor(User: User): boolean;
    checkIfMergable(): boolean;
    merge(commit_title: string): void;
    addLabel(label: string): Promise<void>;
    ParseReview(data: Pr_Review[]): boolean;
}
