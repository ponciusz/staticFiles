var wrap = document.createElement("div");
wrap.id = "debug-tools";
document.body.appendChild(wrap);

const scriptUrl =
  "https://raw.githubusercontent.com/ponciusz/staticFiles/main/{scriptName}";
const styleUrl =
  "https://raw.githubusercontent.com/ponciusz/staticFiles/main/{styleName}";

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
