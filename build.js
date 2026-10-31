// Bundles @keycloak/keycloak-admin-client (ESM only) into index.js as CommonJS,
// and writes the licences of every bundled package to THIRD_PARTY_LICENSES.
const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");

const result = esbuild.buildSync({
  entryPoints: ["./index.ts"],
  platform: "node",
  target: "node20",
  bundle: true,
  format: "cjs",
  outfile: "index.js",
  metafile: true,
  logLevel: "warning",
});

// package root of each bundled input file, e.g. node_modules/@scope/name
const roots = new Set();
for (const input of Object.keys(result.metafile.inputs)) {
  const m = input.match(/^(.*node_modules\/(?:@[^/]+\/)?[^/]+)\//);
  if (m) roots.add(m[1]);
}

const findFile = (dir, names) =>
  fs.readdirSync(dir).find((f) => names.includes(f.toLowerCase().replace(/\.(md|txt)$/, "")));

const packages = [...roots]
  .map((root) => {
    const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
    const licenseFile = findFile(root, ["license", "licence"]);
    const noticeFile = findFile(root, ["notice"]);
    return {
      name: pkg.name,
      version: pkg.version,
      license: pkg.license,
      author: typeof pkg.author === "object" ? pkg.author.name : pkg.author,
      repository: typeof pkg.repository === "object" ? pkg.repository.url : pkg.repository,
      licenseText: licenseFile && fs.readFileSync(path.join(root, licenseFile), "utf8").trim(),
      noticeText: noticeFile && fs.readFileSync(path.join(root, noticeFile), "utf8").trim(),
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

const sections = packages.map((p) => {
  let text = `## ${p.name}@${p.version}\n\nLicense: ${p.license}\n\n`;
  if (p.licenseText) {
    text += p.licenseText + "\n";
  } else {
    // some packages ship without a licence file; point to the same licence text elsewhere in this file
    const same = packages.find((o) => o.licenseText && o.license === p.license);
    if (!same) throw new Error(`${p.name}: no licence file, and no other bundled package has ${p.license}`);
    text += `This package does not ship a licence file.\n`;
    if (p.author) text += `Author: ${p.author}\n`;
    if (p.repository) text += `Source: ${p.repository}\n`;
    text += `The full ${p.license} text is reproduced under ${same.name} above or below.\n`;
  }
  if (p.noticeText) text += `\n### NOTICE\n\n${p.noticeText}\n`;
  return { name: p.name, text };
});

fs.writeFileSync(
  "THIRD_PARTY_LICENSES",
  "index.js bundles the following packages. Their licences and notices are reproduced below.\n\n" +
    sections.map((s) => s.text).join("\n---\n\n"),
);
console.log(`index.js built, ${sections.length} bundled packages listed in THIRD_PARTY_LICENSES`);
