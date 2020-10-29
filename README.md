# auto-mergebot
A simple automated bot process to automate your pull request.
# Features
- Merges PR on the confirmation from the Author.
- Merges PR only on the approval of the owner or collaborator.
- Aknowledges User on the approval of PR.
- Comments on PR on events.

# Commenting
The bot comments on the PR issue when the PR is created and when the Owner or Collaborator approves the PR.

# Getting Started
```js
const mergebot = require('auto-mergebot')
const clientOptions = {
	token:'You github app or personal access token',
	Smee_io:'You https://smee.io URL for webhook delivery'
}
const mergeOptions = {
	approve_label:'The name of the label to give when PR is approved by owner or collaborator',
	mentions:true, //wether to mention the PR author on #Commenting
	on_create_comment: 'thx for submitting this PR', // the comment to POST when PR is created
	merge_ask_comment: 'Looks good lets merge this PR , Post a comment saying > ready to merge', // the comment to POST when PR is approved by owner or collaborator
	merge_confirm_comment: 'ready to merge', // the confirm comment by the user to merge the PR
	commit_title: true // If left true bot will add its own commit title when merging that is `Merged PR #{PR Numeber}`
}
const client = new mergebot.Client(clientOptions,mergeOptions) //here we Go bot will start to run if no errors are in console and no efforts needed !!
```

# Events guide
Please enable the following events in your github webhook
- Pull request 
- Pull request review
- Issue comment

# Bot Info
Here is a brief info about the Client.
- Client uses https://smee.io for webhook delivery
- Client runs automatically
- When a PR is made Client sends a message which is defined in mergeOptions.on_create_comment
- When the Owner or Contributor approves the PR bot adds an label which is defined in mergeOptions.approve_label and sends a comment to ask the User for confirmation about merging the PR on his/her behalf which is defined in mergeOptions.merge_ask_comment
- When the user sends the confirmation comment the which is defined in mergeOptions.merge_confirm_comment, the Client merges the PR instanly 
- Note: PR is only merged when 
 1) The PR is apporved by the Owner or Collaborator.(will also work if the PR dosent have approve label it checks reviews)
 2) On the confirmation of the PR author.
- The PR is merged with the mergeOptions.commit_title

# Requesting features
Fell free to open an issue asking for the feature you need.

# Contribution 
I am really looking for an helping hand to help in this Project, if you are willing to help,feel free to make a pull request and choose an appropiate Title about the thing you are adding or improving.
