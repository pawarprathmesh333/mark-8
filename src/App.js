import "./styles.css";
import React, { useState } from "react";

var emoDict = {
  "π": "Yum, that looks so good!",
  "π": "Wow, you look so good!",
  "π": "Goofiness, silliness, joking around.",
  "π€ͺ": "Iβm losing it! vibe",
  "π": "Hilarity, excitement.",
  "π€": "Show me the money!",
  "π€": "A warm embrace.",
  "π€­": "Shock and disbelief.",
  "π€«": "This is a secret, donβt tell anyone."
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
