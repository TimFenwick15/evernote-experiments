Experiments with the Evernote API.

## Developer Token
The Evernote API can use OAuth or a private key (developer token) as the authentication method.

I've used the developer token method. There are sandbox and production tokens. Sandbox tokens make API requests act on an acount in a sandbox environment, production tokens make the API requests act on a real Evernote account.

http://dev.evernote.com/doc/articles/dev_tokens.php

Production developer tokens aren't supplied by default; you need to request access to generate production developer tokens.

https://discussion.evernote.com/topic/113349-developer-token-requests/

## Running the code
To use this code, rename keys.example.js to keys.js and set developerToken to your production developer token.

Run $ npm i

Run $ node index.js
