#!/usr/bin/env node
/* Every module in this registry must declare its own licence in its front
 * matter. There is no default: a module without one is not offered, because a
 * content repository that silently licenses whatever is added to it is a trap.
 * Run:  node check-licenses.js   (exit 1 if any module declares none) */
const fs = require("fs"), path = require("path");
const dir = path.join(__dirname, "modules");
let bad = 0;
for (const n of fs.readdirSync(dir).sort()) {
  if (!n.endsWith(".md") || n.toLowerCase() === "readme.md") continue;
  const fm = (fs.readFileSync(path.join(dir, n), "utf8").match(/^---\n([\s\S]*?)\n---/) || [])[1] || "";
  if (!/^license:\s*\S/m.test(fm)) { console.log(`⛔ modules/${n} declares no license`); bad++; }
}
console.log(bad ? `${bad} module(s) without a license` : "every module declares a license");
process.exit(bad ? 1 : 0);
