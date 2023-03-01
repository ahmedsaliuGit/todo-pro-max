const express = require("express");
const fs = require("fs");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const TodoApp = require("../dist/ssr/main");
const IndexContent = fs.readFileSync(
  path.resolve(__dirname, "../dist/hydrate/index.html"),
  "utf8"
);

const app = express();
const port = 3004;

app.use(express.static("dist/hydrate", { index: false }));

app.get("*", (req, res) => {
  const appHtml = ReactDOMServer.renderToString(TodoApp.SsrApp(req.url));
  const indexHtml = IndexContent.replace(
    "<body>",
    `<body><div id="root">${appHtml}</div>`
  );
  res.send(indexHtml);
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});
