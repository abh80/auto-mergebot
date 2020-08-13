/// <reference types="node" />
import { EventEmitter } from "events";
import event = require("eventsource");
declare class EventHandeler extends EventEmitter {
    event: event;
    url: string;
    constructor(url: string);
    run(): void;
}
export default EventHandeler;
