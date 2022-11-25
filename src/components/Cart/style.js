import styled from "styled-components";

export const Aside = styled.aside`
  width: 35%;

  h2 {
    width: 100%;
    height: 65px;
    font-size: 18px;
    color: #ffffff;
    background: #27ae60;
    border-radius: 5px 5px 0px 0px;
    padding: 20px 0 0 20px;
  }

  div {
    width: 100%;
    height: 158px;
    background: #f5f5f5;
    text-align: center;
    padding-top: 40px;
    border-radius: 0px 0px 5px 5px;
  }

  h3 {
    font-size: 18px;
    color: #333333;
  }

  p {
    font-size: 14px;
    color: #828282;
  }

  li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f5f5f5;
    padding: 10px;
  }

  img {
    width: 25%;
    height: 65px;
    background: #e0e0e0;
    border-radius: 5px;
  }

  span {
    margin: -20px 0 0 -10px;
  }

  li > span > h3 {
    font-size: 12px;
  }

  li > span > p {
    font-size: 10px;
  }

  button {
    font-size: 10px;
    color: #bdbdbd;
    border: transparent;
    background-color: transparent;
    margin-top: -30px;
  }
`;

export const DivContainer = styled.div`
  border-top: 2px solid #e0e0e0;
  background-color: black;

  div {
    width: 90%;
    height: 10px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-top: -40px;
  }

  h4 {
    font-size: 14px;
    color: #333333;
  }

  h3 {
    font-size: 14px;
    color: #828282;
  }

  button {
    width: 90%;
    color: #828282;
    font-size: 16px;
    background: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    height: 60px;
    margin-top: 40px;
  }
`;
