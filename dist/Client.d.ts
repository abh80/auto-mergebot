import EventHandeler from "./EventHandeler";
import * as config from "./config";
declare class Client {
    EventHandeler: EventHandeler;
    ClientOptions: config.ClientOptions;
    MergeOptions: config.MergeOptions;
    token: string;
    constructor(ClientOptions: config.ClientOptions, MergeOptions: config.MergeOptions);
    _initialize(): void;
}
export default Client;
