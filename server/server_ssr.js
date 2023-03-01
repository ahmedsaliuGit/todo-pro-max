const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const TodoApp = require("../dist/ssr/main");

const app = express();
const port = 3004;

app.get("*", (req, res) => {
  const appHtml = ReactDOMServer.renderToString(TodoApp.SsrApp(req.url));
  res.send(appHtml);
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});
