import React, { useState, useEffect } from "react";

export default function MainBar({ setDisplayMode }) {
  return (
    <button
      onClick={() => {
        console.log("main mode");
        setDisplayMode("rankings");
      }}
    >
      main
    </button>
  );
}
