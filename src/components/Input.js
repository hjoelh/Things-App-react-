import React from "react";
import styled from "styled-components";

export default function Input({ addTodo }) {
  const [state, setState] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ content: state });
    setState("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TheInput
        autoFocus
        placeholder="Add a thing"
        onChange={(e) => setState(e.target.value)}
        value={state}
      />
    </form>
  );
}

// styles

const TheInput = styled.input`
  border: none;
  border-bottom: 1px solid #9e9e9e;
  width: 100%;
  outline: none;
  margin: 16px 0;
  font-size: 1rem;
  padding: 11px 0;
  &:focus {
    border-bottom: 1px solid #9e9e9e;
    box-shadow: 0 1px 0 0 #9e9e9e;
  }
`;
