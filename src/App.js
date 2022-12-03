import "./styles.css";
import React, { useState } from "react";

var emoDict = {
  "😋": "Yum, that looks so good!",
  "😛": "Wow, you look so good!",
  "😜": "Goofiness, silliness, joking around.",
  "🤪": "I’m losing it! vibe",
  "😝": "Hilarity, excitement.",
  "🤑": "Show me the money!",
  "🤗": "A warm embrace.",
  "🤭": "Shock and disbelief.",
  "🤫": "This is a secret, don’t tell anyone."
};

var dictList = Object.keys(emoDict);
export default function App() {
  var [meaning, setMeaning] = useState("");
  function changeHandler(event) {
    var getEmoji = event.target.value;
    var meaning = emoDict[getEmoji];
    if (meaning === undefined) {
      meaning = "Not in our DB.";
    }
    setMeaning(meaning);
  }
  function clickHandler(emoji) {
    var meaning = emoDict[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>Flag Emoji's</h1>
      <input
        placeholder="Enter your emoji here."
        onChange={changeHandler}
        style={{ padding: "0.5rem 2rem", borderRadius: "0.5rem" }}
      ></input>
      <div
        style={{ padding: "2rem 1rem", fontWeight: "bold", fontSize: "2rem" }}
      >
        {meaning}
      </div>

      <div style={{ margin: "1rem 1rem", padding: "1rem 1rem" }}>
        <h2>Instead select emoji to see meaning</h2>
        {dictList.map(function (emoji) {
          return (
            <span
              style={{
                fontSize: "2rem",
                paddingLeft: "0.5rem",
                cursor: "pointer"
              }}
              onClick={() => clickHandler(emoji)}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
