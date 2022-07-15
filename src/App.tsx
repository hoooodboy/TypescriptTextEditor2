import React, { useState } from "react";

import { TextEditor, serialize, serializeHtml, validate } from "./TextEditor";
import { exampleContents } from "./fauxApi";

const contentSamples = ["c1", "c2", "c3", "c4", "c5"];
import "./styles.css";
const App = () => {
  const [contentSample, setContentSample] = useState("c1");
  const [value, setValue] = useState(exampleContents[contentSample]);

  const handleChangeContent = (event: { target: { value: any } }) => {
    const updatedContentSample = event.target.value;
    setContentSample(updatedContentSample);
    setValue(exampleContents[updatedContentSample]);
  };

  const handlePost = async () => {
    alert("check console");
    console.log("=== Testing utils ===");
    console.log("AST:", value);
    console.log("serialize:", serialize(validate(value)));
    console.log("serializeHtml:", serializeHtml(validate(value)));
  };

  return (
    <div>
      <h1>TextEditor</h1>

      <select onChange={handleChangeContent} value={contentSample}>
        {contentSamples.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <TextEditor
        key={contentSample}
        formats={[
          "bold",
          "italic",
          "underline",
          "code",
          "strikethrough",
          "h1",
          "h2",
          "pre",
          "blockquote",
          "ol",
          "ul",
          "left",
          "center",
          "right",
          "justify",
        ]}
        value={value}
        onChange={setValue}
        onPost={handlePost}
        mentions={undefined}
      />
      <h2>Debugger</h2>
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </div>
  );
};

export default App;
