import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1280px;
  font-family: 'Arial', sans-serif;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Header = styled.header``;

export const Link = styled(NavLink)`
  color: #e91e63; 
  padding: 12px; 
  border-radius: 8px; 
  text-decoration: none;
  &.active {
    color: #ff4081;
  }
  &:hover,
  &:focus {
    background-color: #ff4081; 
    color: white; 

    &.active {
      color: white; 
    }
  }
`;

export const Loading = styled.div`
  color: #ff4081; 
  font-size: 36px;
  font-style: italic;
  text-align: center;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  font-size: 28px; 
  font-weight: 600; 
  gap: 40px; 
  margin-top: 30px; 
  border-bottom: 3px dotted #ff4081; 
`;