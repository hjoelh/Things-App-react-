import React from "react";
import { MdDeleteSweep, MdBrightnessMedium } from "react-icons/md";
import styled from "styled-components";

export default function Footer({ deleteAll, toggleDarkMode }) {
  return (
    <MyFooter>
      <Button onClick={deleteAll}>
        <Icon left>
          <MdDeleteSweep />
        </Icon>
        CLEAR ALL
      </Button>

      <Button onClick={toggleDarkMode}>
        DARK MODE
        <Icon right>
          <MdBrightnessMedium />
        </Icon>
      </Button>
    </MyFooter>
  );
}

//styles

const MyFooter = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 20px;
  width: 80%;
  max-width: 500px;
`;

const Icon = styled.div`
  padding-left: ${({ right }) => (right ? "8.5px" : null)};
  padding-right: ${({ left }) => (left ? "8.5px" : null)};
`;

const Button = styled.button`
  color: white;
  background: black;
  border: none;
  border-radius: 2px;
  outline: none;
  font-size: 0.8rem;
  text-align: center;
  cursor: pointer;
  padding: 8px 17px;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
`;
