import styled from "styled-components";


export const SearchBlok = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 15px;
  padding-bottom: 15px;
  color: #fff;
  margin-top: 20px;
  border: none;
`;

export const Button = styled.button`
border-radius: 50%;
height: 80px;
width: 80px;
margin-bottom: 50px;
&:hover, &:focus {
    cursor: pointer;
}
`;

export const Form = styled.form`
margin-left: auto;
margin-right: auto;
margin-top: 50px;
width: 400px;
`
export const Input = styled.input`
height: 45px;
margin-right: 15px;
width: 400px`;