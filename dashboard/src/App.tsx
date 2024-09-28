
import "./App.css";


import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Table from "@editorjs/table";
import Code from "@editorjs/code";
import Image from "@editorjs/image";

import Quote from "@editorjs/quote";
import Delimiter from "@editorjs/delimiter";

import { useEffect, useRef } from "react";

function App() {
  const ejInstance = useRef<any>(null);

  const DEFAULT_INITIAL_DATA = {
    time: new Date().getTime(),
    blocks: [
      {
        type: "header",
        data: {
          text: "This is my awesome editor!",
          level: 1,
        },
      },
    ],
  };

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        ejInstance.current = editor;
      },
      tools: {
        header: Header,
        list: List,
        table: Table,
        code: Code,
        image: Image,
        quote: Quote,
        delimiter: Delimiter,
      },
      autofocus: true,
      data: DEFAULT_INITIAL_DATA,
      onChange: async () => {
        let content = await editor.saver.save();

        console.log(content);
      },
    });
  };

  useEffect(() => {
    if (ejInstance.current === null) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  return (
    <>
      <div id="editorjs" style={{ fontFamily: "sans-serif !" }}></div>
    </>
  );
}

export default App;
