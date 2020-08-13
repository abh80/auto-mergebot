export interface Options {
    token: string;
    body: any;
    method: "POST" | "GET" | "PUT" | "PATCH" | "DELETE";
    url: string;
}
export declare function request(options: Options): Promise<any>;
export declare function get(url: string): Promise<any>;
