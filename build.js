const { execSync } = require("child_process")
const fs = require("fs")

// Create the out directory if it doesn't exist
if (!fs.existsSync("out")) {
  fs.mkdirSync("out", { recursive: true })
}

console.log("Starting static site generation...")

// Run the static export script
console.log("Running static export...")
execSync("node static-export.js")

// Generate service pages
console.log("Generating service pages...")
execSync("node generate-service-pages.js")

// Generate services index page
console.log("Generating services index page...")
execSync("node generate-services-index.js")

console.log("Static site generation completed successfully!")
