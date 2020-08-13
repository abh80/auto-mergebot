import { Labels, User, Issue } from "../GithubApi";
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
    constructor(data: any);
    checkIfApproved(label: string): boolean;
}
