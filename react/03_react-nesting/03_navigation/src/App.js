import React from "react";
import "./styles.css";

import { Avatar } from "./component/Avatar";
import { Header } from "./component/Header";
import { Link } from "./component/Link";
import { Logo } from "./component/Logo";
import { Main } from "./component/Main";
import { Navigation } from "./component/Navigation";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <Main>content goes here…</Main>
    </>
  );
}
