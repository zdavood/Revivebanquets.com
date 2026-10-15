const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "../../..");
const escape = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const text = fs.readFileSync(path.resolve(__dirname, "../docs/website-review.md"), "utf8");
const content = text.split("\n").map((line) => {
  const heading = line.match(/^(#{1,3}) (.*)/);
  if (heading) return `<h${heading[1].length}>${escape(heading[2])}</h${heading[1].length}>`;
  if (!line.trim()) return "";
  return `<p>${escape(line).replace(/`([^`]+)`/g, "<code>$1</code>")}</p>`;
}).join("\n");
const image = (name) => `data:image/jpeg;base64,${fs.readFileSync(path.join(root, "screenshots", name)).toString("base64")}`;
const comparisons = ["mobile", "desktop"].map((device) =>
  `<h2>${device === "mobile" ? "Mobile" : "Desktop"} before and after</h2><div class="comparison"><figure><figcaption>Before</figcaption><img alt="${device} homepage before changes" src="${image(`conversion-before-${device}.jpg`)}"></figure><figure><figcaption>After</figcaption><img alt="${device} homepage after changes" src="${image(`conversion-after-${device}.jpg`)}"></figure></div>`
).join("");
fs.mkdirSync(path.join(root, "generated-artifacts"), { recursive: true });
fs.writeFileSync(path.join(root, "generated-artifacts/revive-website-review.html"),
  `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Revive Website Review</title><style>body{margin:0;background:#f7f4ed;color:#30291f;font:16px/1.65 system-ui,sans-serif}main{max-width:1100px;margin:auto;padding:32px}h1,h2,h3{line-height:1.2;color:#725026}h2{margin-top:48px;border-bottom:1px solid #cbb58e;padding-bottom:12px}p{white-space:pre-wrap;overflow-wrap:anywhere}code{font-size:.9em;background:#eae4d8;padding:2px 4px}.comparison{display:grid;grid-template-columns:1fr 1fr;gap:20px}figure{margin:0}figcaption{font-weight:700;padding:10px}img{width:100%;height:auto;border:1px solid #d7cdbd}@media(max-width:650px){main{padding:18px}.comparison{grid-template-columns:1fr}}</style><main>${comparisons}${content}</main></html>`);
console.log("Saved generated-artifacts/revive-website-review.html");
