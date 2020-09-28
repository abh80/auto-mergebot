import { Pr_Review, User } from "../GithubApi";
export default class implements Pr_Review {
    id: number;
    node_id: string;
    user: User;
    body: string;
    state: "APPROVED" | "CHANGES_REQUESTED" | "COMMENTED";
    html_url: string;
    pull_request_url: string;
    author_association: string;
    constructor(data: any);
    checkToBeApproved(): boolean;
}
