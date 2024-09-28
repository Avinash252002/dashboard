"use client";
import "./App.css";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";

import Table from "@editorjs/table";
import Code from "@editorjs/code";
import Image from "@editorjs/image";

import Quote from "@editorjs/quote";
import Delimiter from "@editorjs/delimiter";

import edjsHTML from "editorjs-html";

import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import React from "react";

function App() {
  const ejInstance = useRef<any>(null);

  const [htmlContent, setHtmlContent] = useState<string>("");

  function customBlockParser(block: any) {
    return <span>{block.data.text}</span>;
  }

  const edjsParser = edjsHTML({
    custom: customBlockParser,
  });

  function processParagraphsAndLists(htmlArray: any) {
    return htmlArray.map((html: any) => {
      // Create a temporary DOM element to parse the HTML string
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;

      // Find all <p>, heading elements (h4, h5, h6), and <li> elements
      const elements: any = Array.from(
        tempDiv.querySelectorAll("p,h1,h2,h3,h4,h5,h6,li,blockquote")
      );


      if(tempDiv.innerHTML === "<br>"){
        return `<div style="text-align: center; font-size: 30px;margin-bottom: 10px;margin-top: 10px">***</div>`;
        
      }
      // Iterate through each element
      elements.forEach((el: any) => {
        // Handle <p> and heading elements
        if (["P", "H1", "H2", "H3", "H4", "H5", "H6", "BLOCKQUOTE"].includes(el.tagName)) {
          if (el.innerHTML.trim() !== "") {
            // If not empty, append two <br> tags
            el.innerHTML += "<br/><br/>";
          } else {
            // If empty, insert two <br> tags
            el.innerHTML = "<br/><br/>";
          }
        }

        // Handle <li> elements by inserting custom styling
        if (el.tagName === "LI") {
          el.style.marginBottom = "10px"; // Add margin-bottom for spacing
          el.style.paddingLeft = "10px"; // Add padding-left for indentation
        }

       

        
      });




      // Return the modified HTML string
      return tempDiv.innerHTML;
    });
  }

  const editorToHTML = (data: any) => {
    let html = edjsParser.parse(data);

    console.log(data);
    html = processParagraphsAndLists(html);

    console.log(html);
    setHtmlContent(html.join(""));
  };

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
        paragraph: {
          inlineToolbar: true, // Enables the inline toolbar for the paragraph
          config: {
            preserveBlank: true, // Preserves blank paragraphs
          },
        },

        // table: Table,
        // code: Code,
        // image: Image,
        // simpleImage: SimpleImage,
        quote: Quote,
        delimiter: Delimiter,
      },
      autofocus: true,

      data: DEFAULT_INITIAL_DATA,
      onChange: async () => {
        let content = await editor.saver.save();

        editorToHTML(content);
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
    <div style={{ justifyContent: "center", alignItems: "center" }}>
      <div id="editorjs" style={{ fontFamily: "sans-serif !" }}></div>

      <Box
        sx={{ px: 50 }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></Box>
    </div>
  );
}

export default App;
