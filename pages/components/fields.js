import styled from "styled-components";
import { useState } from "react";
import React from "react";

export default function Fields({ handleSubmit }) {
  const [values, setValues] = useState([]);
  const [values1, setValues1] = useState([]);

  function update(newValue, key) {
    let newState = {
      [key]: newValue
    };

    setValues(newState);
  }

  function update1(newValue, key) {
    let newState = {
      [key]: newValue
    };

    setValues1(newState);
  }

  const onClick = (e) => {
    e.preventDefault();
    handleSubmit(values.symbol);
    handleSubmit(values1.exp);
  };

  return (
    <Wrapper>
      <Field>
        <label htmlFor="symbol">Symbol</label>
        <input
          type="text"
          name="symbol"
          style={{ height: "40px" }}
          onChange={(e) => update(e.target.value, "symbol")}
        />
      </Field>
      <Field>
        <label htmlFor="exp">(YYYY-MM-DD)</label>
        <input
          type="text"
          name="exp"
          style={{ height: "40px" }}
          onChange={(e) => update1(e.target.value, "exp")}
        />
      </Field>
      <button class="submit" onClick={onClick}>
        Submit
      </button>
      Symbol: {values.symbol} Exp: {values1.exp}
    </Wrapper>
  );
}


const Wrapper = styled.form`
  width: 100px;
  display: flex;
  direction: row;
  justify-content: space-around;
  gap: 10%;
  background-color: var(--gray-100);
  border-radius: 10px;
  padding: 20px;
`;


const Field = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  align-items: baseline;
`;
