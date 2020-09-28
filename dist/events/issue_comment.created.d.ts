import * as config from "../config";
declare const _default: {
    new (MergeOptions: config.MergeOptions, ClientOptions: config.ClientOptions): {
        MergeOptions: config.MergeOptions;
        ClientOptions: config.ClientOptions;
        exec(data: any): Promise<void>;
    };
};
export = _default;
