import EventHandeler from "./EventHandeler";
import * as config from "./config";
class Client {
  EventHandeler: EventHandeler;
  ClientOptions: config.ClientOptions;
  MergeOptions: config.MergeOptions;
  token: string;
  constructor(
    ClientOptions: config.ClientOptions,
    MergeOptions: config.MergeOptions
  ) {
    if (!ClientOptions.Smee_io) throw new Error("No smee.io url was provided");
    if (!ClientOptions.token) throw new Error("No Token was provided");
    if (!MergeOptions.approve_label)
      throw new Error("No Approve label was provided");
    if (!MergeOptions.merge_ask_comment)
      throw new Error("No Merge Ask comment was provided");
    if (!MergeOptions.merge_confirm_comment)
      throw new Error("No Merge confirm comment was provided");
    if (!MergeOptions.on_create_comment)
      throw new Error("No On create comment was provided");
    this.token = ClientOptions.token;
    this.ClientOptions = ClientOptions;
    this.MergeOptions = MergeOptions;
    this._initialize()
  }
  _initialize(): void {
    this.EventHandeler = new EventHandeler(this.ClientOptions.Smee_io);
    this.EventHandeler.run(); 
    const events:string[] = ["pull_request.opened","issue_comment.created",'pull_request_review.submitted']
    console.log("Client Started Running");
    events.forEach(event=>{
      const eventFile = new (require(`./events/${event}`))(this.MergeOptions,this.ClientOptions)
      this.EventHandeler.on(event,(Parsed)=>eventFile.exec(Parsed))
    })
  }
}
export default Client;
