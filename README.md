# Zoho-CRM-Widget-React-Typescript-Boilerplate
Zoho CRM Widget Boilerplate using React Typescript

# Create react project using vite in the main directory 
`pnpm create vite`, then, change directory in the `client` folder newly created and install all dependencies :
`cd client && pnpm install` or `cd client && npm install`or `cd client && yarn install`

From the boilerplate repository, copy file `update-index-html.js` into the client folder.
This script is designed to process an HTML file by replacing occurrences of /assets with ./assets in its content. It uses the Node.js fs module to read and write files synchronously.

In the client project, install the zoho extension toolkit library by running `pnpm install zoho-extension-toolkit`

Then, add the zoho widget sdk cdn to the index.html file as a script : 
`<script src="https://live.zwidgets.com/js-sdk/1.2/ZohoEmbededAppSDK.min.js"></script>`