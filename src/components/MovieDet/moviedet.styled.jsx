import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
display: flex;
gap: 30px;
margin-top: 20px;
`;

export const Img = styled.img`
border-radius: 9%;
box-shadow: 8px 8px 24px 0px rgba(99, 55, 15, 1);
`;

export const Item = styled.li`
list-style-type: none;
`;

export const LinkBack = styled(RouterLink)`
color: #c07cb5;
font-style: italic;
padding: 10px;
text-decoration: none;
&:hover, &:focus {
font-weight: 1200;
}
`;

export const Link = styled(RouterLink)`
color: black;
text-decoration: none;
&:hover, &:focus {
font-weight: 1200;
}
`;

export const Infobox = styled.div`
border-top: 3px solid greenyellow;
width: 100%;
`;