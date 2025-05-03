const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

// Create the out directory if it doesn't exist
if (!fs.existsSync("out")) {
  fs.mkdirSync("out", { recursive: true })
}

// Define the service routes we need to pre-render
const services = ["diamond-cutting", "diamond-polishing", "custom-design", "diamond-recutting", "quality-assessment"]

// Create the services directory structure
if (!fs.existsSync("out/services")) {
  fs.mkdirSync("out/services", { recursive: true })
}

// Create service-specific directories
services.forEach((service) => {
  if (!fs.existsSync(`out/services/${service}`)) {
    fs.mkdirSync(`out/services/${service}`, { recursive: true })
  }
})

// Copy the public directory to out
console.log("Copying public directory...")
if (fs.existsSync("public")) {
  execSync("cp -r public/* out/")
}

// Create a simple index.html file
console.log("Creating index.html...")
fs.writeFileSync(
  "out/index.html",
  `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SK Diamond</title>
  <meta http-equiv="refresh" content="0;url=/services/diamond-cutting" />
</head>
<body>
  <p>Redirecting to <a href="/services/diamond-cutting">services</a>...</p>
</body>
</html>
`,
)

// Create a simple _routes.json file for Cloudflare Pages
console.log("Creating _routes.json...")
fs.writeFileSync(
  "out/_routes.json",
  JSON.stringify({
    version: 1,
    include: ["/*"],
    exclude: [],
  }),
)

console.log("Static export completed successfully!")
