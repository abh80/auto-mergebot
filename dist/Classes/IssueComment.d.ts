import { User, Issue_comment } from '../GithubApi';
export default class implements Issue_comment {
    url: string;
    html_url: string;
    issue_url: string;
    id: number;
    node_id: string;
    user: User;
    body: string;
    constructor(data: any);
}
