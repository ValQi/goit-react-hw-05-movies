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