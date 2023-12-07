import styled from "styled-components";

export const CastList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 35px;
`;

export const CastItem = styled.li`
flex-basis: calc((100% - 40px) / 3);
list-style-type: none;
`;

export const CastP = styled.p`
  font-size: 20px;
  font-weight: 600px;
`;