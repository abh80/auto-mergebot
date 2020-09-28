const mergeBot = require('./dist/index')
const mergeOptions = {
    approve_label: 'approved',
    mentions:true,
    on_create_comment:'Hey thanks for submitting this PR,please wait for Owner or collaborator to approve your PR',
    merge_ask_comment:'Hey looks good, Well done now we are ready to merge this PR once ready post a comment saying \n > ready to merge',
    commit_title:true,
    merge_confirm_comment:'ready to merge'
}
const clientOptions = {
    token: 'YOUR github app or personal token HERE',
    Smee_io: 'YOUR https://smee.io url'
}
const client = new mergeBot.Client(clientOptions,mergeOptions)
/* make sure that webhooks event has the following enabled - 
1) Pull request
2) Pull request review
3) Issue Comment
*/
// created by abh80