import React, { useState, useEffect } from "react";
import Todos from "./components/Todos.js";
import Input from "./components/Input.js";
import Footer from "./components/Footer.js";
import Login from "./components/Login.js";
import * as Realm from "realm-web";
import useDarkMode from "./hooks/useDarkMode";
import useRealmUser from "./hooks/useRealmUser";
import styled from "styled-components";

const realm = new Realm.App({ id: "things-nglbu" });

export default function App() {
  const mongo = realm.currentUser
    ?.mongoClient("mongodb-atlas")
    .db("Todos")
    .collection("test");

  const [darkMode, toggleDarkMode, DarkDiv] = useDarkMode();
  const [user, setUser] = useRealmUser(realm);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (user) {
      const getInitial = async () => {
        try {
          const result = await realm.currentUser
            .mongoClient("mongodb-atlas")
            .db("Todos")
            .collection("test")
            .find({});
          console.log(result);
          return result;
        } catch (e) {
          console.log(e);
        }
      };
      getInitial().then((result) => setTodos(result));
    }
  }, [user]);

  const deleteTodo = async (key) => {
    if (user) {
      await mongo.deleteOne({ key });
    }

    setTodos(todos.filter((t) => t.key !== key));
  };

  const addTodo = async (todo) => {
    if (todo.content !== "") {
      let todoCopy = { ...todo };
      todoCopy.key = Math.random();
      todoCopy.completed = false;

      if (user) {
        todoCopy.owner_id = user.id;
        await mongo.insertOne(todoCopy);
      }

      setTodos((state) => [...state, todoCopy]);
    }
  };

  const markCompleted = async (todo) => {
    const copy = { ...todo };
    const index = todos.findIndex((e) => e.key === todo.key);
    copy.completed = !todo.completed;

    if (user) {
      await mongo.updateOne(todo, copy);
    }

    setTodos((state) => {
      const copyTodos = [...state];
      copyTodos[index] = copy;
      return copyTodos;
    });
  };

  const deleteAll = async () => {
    if (user && todos.length >= 1) await mongo.deleteMany({});
    setTodos([]);
  };

  const clearOnSignOut = () => {
    setTodos([]);
    setUser(false);
  };

  return (
    <>
      <Login
        realm={realm}
        user={user}
        setUser={setUser}
        clearOnSignOut={clearOnSignOut}
      />

      <Title>Things.</Title>

      <p>{user.email || "anon"}</p>
      <p>{realm.currentUser?.id}</p>
      <p>{mongo?.fetcher.userContext.currentUser.id}</p>

      <Input addTodo={addTodo} />

      <Todos
        todos={todos}
        deleteTodo={deleteTodo}
        markCompleted={markCompleted}
      />

      <Footer deleteAll={deleteAll} toggleDarkMode={toggleDarkMode} />

      {darkMode ? <DarkDiv /> : null}
    </>
  );
}

// styles

const Title = styled.h1`
  text-align: center;
  color: black;
  font-weight: bold;
  font-size: 3.5em;
  padding: 30px;
`;
