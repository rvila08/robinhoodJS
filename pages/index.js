import * as React from "react";
import Heading from "./components/headings";
import Fields from "./components/fields";
import Data from "./components/data";
import { useState } from "react"; 
import styled from "styled-components";


export default function App() {

  const [entries, setEntries] = useState([]);

  function addEntry(entry) {
    const newEntries = [...entries, entry];
    setEntries(entry);

    return newEntries
  }

  //const spawn = require('child_process').spawn;

  //const pythonProcess = spawn('python', ['./app.py']);

  //pythonProcess.stdout.on('data', (data) => {console.log(`stdout: ${data}`)});
  //pythonProcess.stderr.on('data', (data) => {console.log(`stderr: ${data}`)});
  //pythonProcess.on('close', (code) => {console.log(`child process exited code: ${code}`)});


  return (
    <div className="bg-green-100 p-3 flex text-center place-items-center flex-col gap-4">
      Option Contracts
      <Fields handleSubmit={addEntry} />
      <Heading />
      <Data />
      <Data />
      <Data />
      <Data />
    </div>
  );
}
