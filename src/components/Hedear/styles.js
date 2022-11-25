import styled from "styled-components";

const HeaderSyle = styled.header`
  width: 100%;
  height: 80px;
  background: #f5f5f5;
  display: flex;

  div {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    width: 35%;
    height: 60px;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
  }

  input {
    border: transparent;
    height: 80%;
    width: 55%;
    padding-left: 10px;
  }

  input::placeholder {
    color: #E0E0E0;
  }

  button {
    width: 40%;
    height: 40px;
    color: #FFFFFF;
    background: #27ae60;
    border: transparent;
    border-radius: 8px;
  }
`

export default HeaderSyle
