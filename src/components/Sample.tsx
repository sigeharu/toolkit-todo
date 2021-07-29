import React from "react";

const Sample: React.VFC = () => {
  return (
    <div>
      <button className="button" onClick={() => console.log("button")}>
        ボタン
      </button>
    </div>
  );
};

export default Sample;
