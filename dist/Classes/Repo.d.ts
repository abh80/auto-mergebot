import { User, Repo } from "../GithubApi";
export default class implements Repo {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: User;
    url: string;
    constructor(data: any);
}
