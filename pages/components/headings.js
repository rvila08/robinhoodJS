import * as React from "react";
import styled from "styled-components";

export default function headings() {
  return (
      <div className="bg-green-100 grid grid-cols-9 text-xs w-8/12">
        <h1 className="border-solid p-3 border-2 border-light-blue-500">
          Strike Price
        </h1>
        <h1 className="border-solid p-3 border-2 border-light-blue-500">
          Symbol
        </h1>
        <h1 className="border-solid p-3 border-2 border-light-blue-500">
          Expiration Date
        </h1>
        <h1 className="border-solid p-3 border-2 border-light-blue-500">Type</h1>
        <h1 className="border-solid p-3 border-2 border-light-blue-500">Delta</h1>
        <h1 className="border-solid p-3 border-2 border-light-blue-500">Gamma</h1>
        <h1 className="border-solid p-3 border-2 border-light-blue-500">Theta</h1>
        <h1 className="border-solid p-3 border-2 border-light-blue-500">Vega</h1>
        <h1 className="border-solid p-3 border-2 border-light-blue-500"> Rho </h1>
      </div>
  );
}