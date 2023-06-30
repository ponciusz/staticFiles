var wrap = document.createElement("div");
wrap.id = "debug-tools";
document.body.appendChild(wrap);

const scriptUrl =
  "https://raw.githubusercontent.com/ponciusz/staticFiles/main/dist/assets/index-ae17c913.js";
const styleUrl =
  "https://raw.githubusercontent.com/ponciusz/staticFiles/main/dist/assets/index-578c6832.css";

fetch(scriptUrl)
  .then((response) => response.text())
  .then((scriptCode) => {
    const scriptTag = document.createElement("script");
    scriptTag.text = scriptCode;
    document.head.appendChild(scriptTag);
  })
  .catch((error) => {
    console.error("Error with injecting script", error);
  });

fetch(styleUrl)
  .then((response) => response.text())
  .then((css) => {
    const style = document.createElement("style");
    style.textContent = css;
    document.head.append(style);
  })
  .catch((error) => {
    console.error("Error with injecting styles:", error);
  });
