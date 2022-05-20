import * as React from "react";
import Heading from "./components/headings";
import Fields from "./components/fields";
import Data from "./components/data";
import { useState } from "react"; 
import styled from "styled-components";

export default function Options() {

  const [entries, setEntries] = useState([]);

  function addEntry(entry) {
    const newEntries = [...entries, entry];
    setEntries(entry);

    return newEntries
  }

  /*const { PythonShell } = require('python-shell');

  let options = {
    mode: 'text',
    pythonPath: 'python',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: 'path',
    args: ['arg1', 'arg2']
  };

  PythonShell.runString('app.py', options, function(err, results) {
    'from'
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
  });*/

  //const spawn = require('child_process').spawn;

  //const pythonProcess = spawn('python', ['./app.py']);

  //pythonProcess.stdout.on('data', (data) => {console.log(`stdout: ${data}`)});
  //pythonProcess.stderr.on('data', (data) => {console.log(`stderr: ${data}`)});
  //pythonProcess.on('close', (code) => {console.log(`child process exited code: ${code}`)});


  return (
    <div className="bg-green-500 p-3 flex text-center place-items-center flex-col gap-4">
      <Fields handleSubmit={addEntry} />
      <Heading />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
    </div>
  );
}
