import React from "react";
import styled from "styled-components";
import { MdClose, MdDone } from "react-icons/md";
import Reward from "react-rewards";

export default function Todos({ todos, markCompleted, deleteTodo }) {
  const confetti = React.useRef({});

  const onComplete = async(todo) => {
    const { key } = todo;
    await markCompleted(todo);
    if (!todo.completed) confetti.current[key].rewardMe();
  };

  if (todos.length >= 1) {
    return (
      <ListWrap>
        {todos.map((todo) => (
          <Item key={todo.key} completed={todo.completed}>
            <Icon left>
              <MdClose onClick={() => deleteTodo(todo.key)} />
            </Icon>

            <Text>{todo.content}</Text>

            <Icon right>
              <Reward
                ref={(ref) => (confetti.current[todo.key] = ref)}
                type="confetti"
              >
                <MdDone onClick={() => onComplete(todo)} />
              </Reward>
            </Icon>
          </Item>
        ))}
      </ListWrap>
    );
  } else {
    return <P2>No things left...</P2>;
  }
}

//styles

const gradient = `linear-gradient(
  90deg,
  rgba(0, 200, 219, 1) 0%,
  rgba(0, 255, 158, 1) 100%
)`;

const Item = styled.div`
  padding: 10px;
  border: 1px solid black;
  background: ${({ completed }) => (completed ? gradient : null)};
  text-align: center;
`;

const ListWrap = styled.div`
  border: none;
  max-width: 500px;
  max-height: 65vh;
  overflow-x: hidden;
  overflow-y: auto;
`;

const P2 = styled.p`
  height: 42px;
  margin: 0;
  padding: 0;
  text-align: center;
  padding: 10px;
  opacity: 0.25;
`;

const Icon = styled.div`
  padding: 0 6px;
  font-size: 1.2rem;
  float: ${({ left }) => (left ? "left" : "right")};
`;

const Text = styled.p`
  width: 80%;
  margin: 0 auto;
  display: inline-block;
  word-wrap: break-word;
  font-size: 1rem;
`;
