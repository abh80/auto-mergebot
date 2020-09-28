export declare const baseUrl: string;
export declare const RepoUrl: string;
export interface ClientOptions {
    readonly token: string;
    readonly Smee_io: string;
}
export interface MergeOptions {
    readonly on_create_comment: string;
    readonly mentions?: boolean;
    readonly approve_label: string;
    readonly merge_ask_comment: string;
    readonly merge_conflict_comemnt: string;
    commit_title: true | string;
    readonly merge_confirm_comment: string;
}
