import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container, Loading, Nav, Header, Link, } from "./shared.styled";

export const Shared = () => {
    return (
        <Container>
        <Header>
          <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
        </Header>
        <Suspense fallback={<Loading>Loading , please wait...</Loading>}>
        <Outlet />
        </Suspense>
      </Container>
    );
};