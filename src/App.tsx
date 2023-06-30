import { useState } from "react";
import "./App.css";
import clsx from "clsx";
// import { data } from "./data";
// (window as any).__NEXT_DATA__ = data;

const getSeoId: any = () => {
  let message = "No Seo ID found";
  try {
    const { queries } = (window as any).__NEXT_DATA__.props.pageProps
      .initialState.api;

    const { locale } = (window as any).__NEXT_DATA__.props.pageProps
      .initialState.currentStore;

    Object.keys(queries).forEach((key) => {
      if (key.includes("getCataloguePageById")) {
        message = `ContentStack Language is: ${locale}\n
        Your Catalouge Page ID is: ${queries[key].originalArgs.uid}`;
      }
      if (key.includes("getContentPageById")) {
        message = `ContentStack Language is: ${locale}
        Your Content Page ID is: ${queries[key].originalArgs.uid}`;
      }
    });

    return message;
  } catch (error) {
    console.log(error);
    return message;
  }
};

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="dbg-toggle"
      >
        Debug
      </button>
      <div
        className={clsx("dbg-wrap", {
          "dbg-wrap--open": isOpen,
        })}
      >
        {getSeoId()}
      </div>
    </>
  );
}

export default App;
