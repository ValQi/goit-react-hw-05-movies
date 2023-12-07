import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Item = styled.li`
&:hover, &:focus {
    font-weight: 1200;
}
`;

export const MovLink = styled(Link)`
color: black;
text-decoration: none;
`;

export const MovList = styled.ul`
  list-style-type: none;
  display: grid;
  max-width: calc(100vw - 65px);
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 15px;
  margin-top: 50px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 40px;
  }
`;
export const MovP = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: black;
`;

export const MovImg = styled.img`
  display: flex;
  width: 100%;
`;