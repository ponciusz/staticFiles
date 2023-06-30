const fs = require("fs").promises;
const path = require("path");

async function readFilenamesFromFolder() {
  try {
    let cssName = "";
    let jsName = "";
    const files = await fs.readdir("dist/assets");

    files.forEach((file) => {
      if (file.includes(".css")) {
        cssName = file;
      }
      if (file.includes(".js")) {
        jsName = file;
      }

      console.log(file);
    });

    const data = await fs.readFile("dist/init.js", "utf8");
    const modifiedData = data
      .replace(/{scriptName}/g, jsName)
      .replace(/{styleName}/g, cssName);

    await fs.writeFile("dist/init.js", modifiedData, "utf8");

    console.log("File updated successfully.");
  } catch (err) {
    console.error("Error reading folder:", err);
  }
}

readFilenamesFromFolder();
