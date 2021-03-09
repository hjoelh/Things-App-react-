import React, { useState } from "react";
import { Credentials } from "realm-web";
import styled from "styled-components";

export default function Login({ realm, setUser, clearOnSignOut, user }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [placeHolder, setPlaceHolder] = useState(
    user
      ? { email: user.email, password: "Logged in" }
      : {
          email: "email",
          password: "password",
        }
  );

  const signIn = async () => {
    const appUser = Credentials.emailPassword(username, password);

    try {
      const userDetails = await realm.logIn(appUser);
      setUser({ email: userDetails._profile.data.email, id: userDetails.id });
      setPlaceHolder({
        email: userDetails._profile.data.email,
        password: "Logged in",
      });
      clearUser();
      toggleFormForced();
    } catch (err) {
      setPlaceHolder({ email: "error", password: "error" });
    }
  };

  const signUp = async () => {
    try {
      await realm.emailPasswordAuth.registerUser(username, password);
      await signIn();
    } catch (e) {
      clearUser();
      setPlaceHolder({ email: "error", password: e.error });
    }
  };

  const signOut = async () => {
    try {
      await realm.currentUser.logOut();
      setUser(false);
      setPlaceHolder({
        email: "email",
        password: "password",
      });
      clearOnSignOut();
      toggleFormForced();
    } catch (e) {
      console.log(e);
    }
  };

  const toggleForm = () => {
    if (username) {
      signIn();
    } else {
      setShowForm(!showForm);
    }
  };

  const toggleFormForced = () => setShowForm(!showForm);

  const clearUser = () => {
    setUsername("");
    setPassword("");
  };

  if (showForm) {
    return (
      <Wrap>
        <FormDiv>
          <Input
            placeholder={placeHolder.email}
            className="formInput"
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            placeholder={placeHolder.password}
            className="formInput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {user ? (
            <Button onClick={signOut}>Sign Out</Button>
          ) : (
            <Button onClick={signUp}>Create Account</Button>
          )}
        </FormDiv>
        <Button onClick={toggleForm} className="signBtn ">
          {user ? "Logged in" : "Sign in"}
        </Button>
      </Wrap>
    );
  } else {
    return (
      <Wrap>
        <Button onClick={toggleForm} className="signBtn">
          {user ? "Logged in" : "Sign in"}
        </Button>
      </Wrap>
    );
  }
}

// styles

const Button = styled.button`
  color: white;
  background: black;
  border: none;
  border-radius: 2px;
  outline: none;
  font-size: 0.9rem;
  text-align: center;
  padding: 8px 17px;
  cursor: pointer;
  pointer-events: all;
  justify-content: center;
  align-content: center;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  background: linear-gradient(
    90deg,
    rgba(0, 200, 219, 1) 0%,
    rgba(0, 255, 158, 1) 100%
  );
`;

const Input = styled.input`
  border: none;
  color: white;
  border-bottom: 0.5px solid white;
  width: 100%;
  outline: none;
  background: transparent;
  margin: 10px 0;
  font-size: 1rem;
  padding: 5px 0;
  &:focus {
    border-bottom: 1px solid white;
    box-shadow: 0 1px 0 0 white;
  }
`;

const FormDiv = styled.div`
  background: black;
  color: white;
  margin: auto;
  overflow: hidden;
  padding: 25px;
  margin: 25px;
  border-radius: 10px;
  pointer-events: all;
`;

const Wrap = styled.div`
  text-align: center;
  position: fixed;
  width: 80%;
  max-width: 500px;
  margin: 0 auto;
  bottom: 22.5px;
  pointer-events: none;
  z-index: 1;
  @media (max-width: 500px) {
    position: static;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    z-index: 11;
    width: 100%;
    pointer-events: none;
  }
`;
