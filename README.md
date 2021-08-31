# gatsby-funcjam-21-byte-size

Byte-size Gatsby Functions examples

## 👀 Live demo

Example functions within this repo can be seen here: [
gatsby-funcjam-21-byte-size](https://gatsbyfuncjam21bytesize.gatsbyjs.io/)

## ⚙️ The Functions

There are a number of functions within this repo and all have a corresponding page.
Some functions require user input and will `POST` data captured in the UI via inputs and send them to the Function whilst others are `GET` request and can be run from either the page or by visiting the url in your browsers address bar.

## 🕺 What's the time?

A simple `GET` request that returns a `200` and `message`. This endpoint can visited from the browsers address bar or via the UI.

#### **`GET`** | [/api/whats-the-time](https://gatsbyfuncjam21bytesize.gatsbyjs.io/api/whats-the-time)

`function src`: [/src/api/whats-the-time.js](/src/api/whats-the-time.js)

`page src`: [/src/pages/whats-the-time.js](/src/pages/whats-the-time.js)

🔗: [whats-the-time](https://gatsbyfuncjam21bytesize.gatsbyjs.io/whats-the-time)

##### `req.body` params

| Name | Type | Required | Summary |
| ---- | ---- | -------- | ------- |
| n/a  | n/a  | n/a      | n/a     |

## 🛡️ TypeScript Function

A simple `GET` request that returns a `200` and `message`. This endpoint can visited from the browsers address bar or via the UI and has been written in [TypesScript](https://www.typescriptlang.org/)

#### **`GET`** | [/api/typescript-function](https://gatsbyfuncjam21bytesize.gatsbyjs.io/api/typescript-function)

`function src`: [/src/api/typescript-function.ts](/src/api/typescript-function.ts)

`page src`: [/src/pages/typescript-function.js](/src/pages/typescript-function.js)

🔗: [typescript-function](https://gatsbyfuncjam21bytesize.gatsbyjs.io/typescript-function)

##### `req.body` params

| Name | Type | Required | Summary |
| ---- | ---- | -------- | ------- |
| n/a  | n/a  | n/a      | n/a     |
