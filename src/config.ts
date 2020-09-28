export const baseUrl: string = "https://api.github.com/";
export const RepoUrl: string = "https://api.github.com/repos/";
export interface ClientOptions {
  readonly token: string; //required to login to GitHub
  readonly Smee_io: string; //smee.io Webhook URL to listen to automatic events
}
export interface MergeOptions {
  readonly on_create_comment: string; //the comment to post when someone create a Pull Request
  readonly mentions?: boolean; // Boolean to mention someone on events for example on PR create bot will mention the User
  readonly approve_label: string; //a valid Repo label name to add when owner or collaborators apporve a PR to help bot merge PR's
  readonly merge_ask_comment: string; // the comment to post when owner or collaborator approves a PR
  readonly merge_conflict_comemnt: string; //the comment to post when there is an merge conflict
  commit_title: true | string; //if true bot will post its own merge title => (Merged PR #PRnumber) if inputed an string bot will post custom commit
  readonly merge_confirm_comment: string; //this is the comment for which the bot will listen for the PR author to post and instanly merge the PR
}
