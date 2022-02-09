import React, { useEffect, useState } from "react";

export default function HistoryButton({ setDisplayMode }) {
  return (
    <button
      onClick={() => {
        console.log("history mode");
        setDisplayMode("histories");
      }}
    >
      History
    </button>
  );
}
