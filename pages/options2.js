import * as React from "react";
import Heading from "./components/headings";
import Fields from "./components/fields";
import Data from "./components/data";

export default function Protected({ user }) {
  console.log({ user })
  return (
    <div className="bg-green-500 p-3 flex text-center place-items-center flex-col gap-4">
      <Fields />
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
  )
}