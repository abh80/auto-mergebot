import { EventEmitter } from "events";
import event = require("eventsource");
class EventHandeler extends EventEmitter {
  event: event;
  url: string;
  constructor(url: string) {
    super();
    this.event = new event(url);
    this.url = url;
  }
  run(): void {
    this.event.addEventListener("message", (msg) => {
      let Parsed = JSON.parse(msg.data);
      this.emit(`${Parsed["x-github-event"]}.${Parsed.body.action}`, Parsed.body);
    });
  }
}
export default EventHandeler;
