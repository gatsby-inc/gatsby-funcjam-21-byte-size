<a  href="https://gatsbyfuncjam21bytesize.gatsbyjs.io/" target="_blank">
<img src="https://gatsbyfuncjam21bytesize.gatsbyjs.io/images/gatsby-funcjam-21-byte-size-repo-image.png" alt="Gatsby FuncJam 21 Byte-size" width="300" height="auto"/>
</a>

# Gatsby FuncJam '21 Byte-size

Byte-size Gatsby Functions examples.

Learn more about the [FuncJam](https://www.gatsbyjs.com/func-jam-21/) challenge on the [Gatsby Blog](https://www.gatsbyjs.com/blog/the-gatsby-funcjam-challenge)

<br />

## 👀 Live demo

Example functions within this repo can be seen here: [
gatsby-funcjam-21-byte-size](https://gatsbyfuncjam21bytesize.gatsbyjs.io/)

<br />

## ⚙️ The Functions

There are a number of functions within this repo and all have a corresponding page.
Some functions require user input and will `POST` data captured in the UI via inputs and send them to the Function whilst others are `GET` request and can be run from either the page or by visiting the url in your browsers address bar.

<br />

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

<br />

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

<br />

## 📊 POST body parameters

A simple `POST` request that sends an emoji and returns a `200` and `message`.

#### **`POST`**

`function src`: [/src/api/post-body-params-with-fetch.js](/src/api/post-body-params-with-fetch.js)

`page src`: [/src/pages/post-body-params-with-fetch.js](/src/pages/post-body-params-with-fetch.js)

🔗: [post-body-params-with-fetch](https://gatsbyfuncjam21bytesize.gatsbyjs.io/post-body-params-with-fetch)

##### `req.body` params

| Name  | Type   | Required | Summary           |
| ----- | ------ | -------- | ----------------- |
| emoji | string | false    | The emoji to send |

<br />

## 💌 Validate email addresses server-side

A `POST` request that sends an email address to the server for validation using [Yup](https://github.com/jquense/yup)

#### **`POST`**

`function src`: [/src/api/validate-email.js](/src/api/validate-email.js)

`page src`: [/src/pages/validate-email.js](/src/pages/validate-email.js)

🔗: [validate-email](https://gatsbyfuncjam21bytesize.gatsbyjs.io/validate-email)

##### `req.body` params

| Name  | Type   | Required | Summary       |
| ----- | ------ | -------- | ------------- |
| email | string | true     | email address |

<br />

## 🚫 Restrict access using CORS middleware

A `POST` request with restricted access to a defined list of `allowedOrigins` using [CORS](https://www.npmjs.com/package/cors) middleware

#### **`POST`**

`function src`: [/src/api/custom-middleware.js](/src/api/custom-middleware.js)

`page src`: [/src/pages/custom-middleware.js](/src/pages/custom-middleware.js)

🔗: [custom-middleware](https://gatsbyfuncjam21bytesize.gatsbyjs.io/custom-middleware)

##### `req.body` params

| Name    | Type   | Required | Summary          |
| ------- | ------ | -------- | ---------------- |
| message | string | true     | a simple message |

<br />

## 🧳 Store data in Google Sheets

A `POST` request that sends data to a Google Spreadsheet and returns a status `200` and `message`

#### **`POST`**

`function src`: [/src/api/post-to-google-sheets.js](/src/api/post-to-google-sheets.js)

`page src`: [/src/pages/post-to-google-sheets.js](/src/pages/post-to-google-sheets.js)

🔗: [post-to-google-sheets](https://gatsbyfuncjam21bytesize.gatsbyjs.io/post-to-google-sheets)

##### `req.body` params

| Name       | Type   | Required | Summary                 |
| ---------- | ------ | -------- | ----------------------- |
| userAnswer | string | true     | the value from an input |

<br />

## 📮 Send emails using SendGrid

A `POST` request that sends a message to a user defined email address using [SendGrid](https://sendgrid.com/). Returns a status `200` and `message`

#### **`POST`**

`function src`: [/src/api/post-to-send-grid.js](/src/api/post-to-send-grid.js)

`page src`: [/src/pages/post-to-send-grid.js](/src/pages/post-to-send-grid.js)

🔗: [post-to-send-grid](https://gatsbyfuncjam21bytesize.gatsbyjs.io/post-to-send-grid)

##### `req.body` params

| Name    | Type   | Required | Summary                             |
| ------- | ------ | -------- | ----------------------------------- |
| email   | string | true     | valid email address                 |
| message | string | true     | the message to include in the email |

<br />

## 🎉 Collect user reactions in Fauna

A `POST` request that sends a reaction to a [Fauna](https://fauna.com/) database. Returns a status `200` and `message`

#### **`POST`**

`function src`: [/src/api/post-to-fauna.js](/src/api/post-to-fauna.js)

`page src`: [/src/pages/post-to-fauna.js](/src/pages/post-to-fauna.js)

🔗: [post-to-fauna](https://gatsbyfuncjam21bytesize.gatsbyjs.io/post-to-fauna)

##### `req.body` params

| Name         | Type   | Required | Summary                           |
| ------------ | ------ | -------- | --------------------------------- |
| userReaction | string | true     | emoji associated with input value |

<br />

### ☝️ Best Practices

For brevity we've tried to leave all but essential code in the example functions. There are however one or two best practices we encourage, these are as follows.

<br />

#### req.methods

To ensure your functions are used correctly it's sometimes helpful to catch incorrect `req.method`s and send a status code an advisory message back to the client.

E.g

```javascript
export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'req.method should be GET' });
  }

  // rest of your function
}
```

```javascript
export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'req.method should be POST' });
  }

  // rest of your function
}
```

<br />

#### req.body

It's sometimes helpful to catch absent parameters and send a status code an advisory message back to the client.

E.g

```javascript
export default function handler(req, res) {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ message: 'No email found on req.body' });
  }

  // rest of your function
}
```
