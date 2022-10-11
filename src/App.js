import React, { useState } from "react";
import Header from "./components/header.js";
import MainBody from "./components/mainBody";


function App() {

  return (
    <main className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[120vh]">
      <Header/>
      <MainBody />
    </main>
  );
}

export default App;