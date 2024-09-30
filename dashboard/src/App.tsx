"use client";
import "./App.css";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";

// import Table from "@editorjs/table";
// import Code from "@editorjs/code";
// import Image from "@editorjs/image";

import { SimpleImage } from "../src/SimpleImage/simpleImage";
import { Video } from "../src/SimpleImage/video";

import Quote from "@editorjs/quote";
import Delimiter from "@editorjs/delimiter";

import edjsHTML from "editorjs-html";

import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

function App() {
  const ejInstance = useRef<any>(null);

  const [htmlContent, setHtmlContent] = useState<string>("");

  const [outputData, setOutputData] = useState("");

  const customParser = {
    video: (block: any) => {
      let url = block.data.url;
      const regex =
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
      const match = url.match(regex);
      if (match) {
        const videoId = match[1];
        url = `https://www.youtube.com/embed/${videoId}`;
      }
      return `<iframe width="100%" height="315" src="${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    },
  };

  const edjsParser = edjsHTML({
    custom: customParser,
    video: customParser.video,
  });

  function processParagraphsAndLists(htmlArray: any) {
    console.log(htmlArray, "htmlArray from ediotr");
    return htmlArray.map((html: any) => {
      // Create a temporary DOM element to parse the HTML string
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;

      const elements: any = Array.from(
        tempDiv.querySelectorAll("p,h1,h2,h3,h4,h5,h6,li,blockquote,video")
      );

      if (tempDiv.innerHTML === "<br>") {
        return `<div style="text-align: center; font-size: 30px;margin-bottom: 10px;margin-top: 10px">***</div>`;
      }

      // Iterate through each element
      elements.forEach((el: any) => {
        // Handle <p> and heading elements
        if (
          ["P", "H1", "H2", "H3", "H4", "H5", "H6", "BLOCKQUOTE"].includes(
            el.tagName
          )
        ) {
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
    html = processParagraphsAndLists(html);
    setHtmlContent(html.join(""));
  };

  function htmlToEditorJSON(html: string) {
    // Create a temporary DOM element to parse the HTML string
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    const data: any = [];

    const elements: any = Array.from(
      tempDiv.querySelectorAll("p,h1,h2,h3,h4,h5,h6,li,blockquote,div,iframe")
    );

    elements.forEach((el: any) => {
      // Handle special "***" divs
      if (
        el.tagName === "DIV" &&
        el.style.textAlign === "center" &&
        el.innerHTML.includes("***")
      ) {
        data.push({
          type: "delimiter",
          data: {
            text: "***",
          },
        });
      }

      // Handle paragraph and heading elements
      else if (
        [
          "P",
          "H1",
          "H2",
          "H3",
          "H4",
          "H5",
          "H6",
          "BLOCKQUOTE",
          "IFRAME",
        ].includes(el.tagName)
      ) {
        let innerText = el.innerHTML.replace(/<br\/?>/g, "").trim(); // Remove <br> tags
        let blockType = el.tagName.toLowerCase();

        // Detect if it's a blockquote or heading
        if (blockType === "blockquote") {
          data.push({
            type: "quote",
            data: {
              text: innerText,
            },
          });
        }
        if (
          blockType === "h1" ||
          blockType === "h2" ||
          blockType === "h3" ||
          blockType === "h4" ||
          blockType === "h5" ||
          blockType === "h6"
        ) {
          data.push({
            type: "header",
            data: {
              text: innerText,
              level: 1,
            },
          });
        } else if (blockType === "iframe") {
          data.push({
            type: "video",
            data: {
              url: el.getAttribute("src"),
            },
          });
        } else {
          data.push({
            type: "paragraph",
            data: {
              text: innerText,
            },
          });
        }
      }

      // Handle <li> list items
      else if (el.tagName === "LI") {
        data.push({
          type: "list",
          data: {
            items: [el.textContent.trim()],
            style: "unordered", // Assuming unordered list, you can add detection for ordered lists
          },
        });
      }
    });

    return data;
  }

  console.log(htmlToEditorJSON(htmlContent), "htmlToEditorJSON");

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
        video: Video,
        image: SimpleImage,
        quote: Quote,
        delimiter: Delimiter,
      },
      autofocus: true,

      data: DEFAULT_INITIAL_DATA,
      onChange: async () => {
        let content = await editor.saver.save();

        const firstBlock = content.blocks[0];
        const secondBlock = content.blocks[1];
        if (
          !(
            firstBlock &&
            firstBlock.type === "header" &&
            firstBlock.data.level === 1
          )
        ) {
          // alert("The first block must be a Heading 1 (H1).");
          editor.clear();
          editor.blocks.render(DEFAULT_INITIAL_DATA);
          return;
        }

        if (!(secondBlock && secondBlock.type === "paragraph")) {
          alert("The meta description must be a paragragh(H2).");

          editor.clear();
          editor.blocks.render(DEFAULT_INITIAL_DATA);
          return;
        }

        const paragraphText = secondBlock.data.text || "";
        if (paragraphText.length > 350) {
          console.log(paragraphText.slice(0, 350));
          secondBlock.data.text = paragraphText.slice(0, 350);
          editor.blocks.render(content);
          alert("The paragraph has been limited to 350 characters."); // Notify the user
        }

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
  const handleSave = () => {
    setOutputData(htmlToEditorJSON(htmlContent));
  };

  console.log(outputData, "outputData");

  return (
    <div style={{ justifyContent: "center", alignItems: "center" }}>
      <div id="editorjs" style={{ fontFamily: "sans-serif" }}></div>

      <Box
        sx={{ px: 50 }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></Box>

      <button onClick={handleSave} id="save-button">
        Save
      </button>

      <pre id="output">{JSON.stringify(outputData, null, 2)}</pre>
    </div>
  );
}

export default App;
