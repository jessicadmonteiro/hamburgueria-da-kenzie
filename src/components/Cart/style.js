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

  li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f5f5f5;
    padding: 10px;
  }

  img {
    width: 50px;
    background: #e0e0e0;
    border-radius: 5px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  h3 {
    font-size: 14px;
    color: #333333;
  }

  p {
    font-size: 12px;
    color: #828282;
  }

  button {
    font-size: 10px;
    color: #bdbdbd;
    border: transparent;
    background-color: transparent;
  }

  @media (max-width: 800px) {
    width: 100%;
    margin-left: 15px;

    li {
      padding: 0 20px;
    }
    img {
      width: 50px;
    }
  }
`;

export const EmptyBag = styled.div`

  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  border-radius: 0px 0px 5px 5px;

  h3 {
    font-size: 18px;
    color: #333333;
    margin-top: 30px;
  }

  p {
    font-size: 14px;
    color: #828282;
  }
`;

export const DivContainer = styled.div`
  background: #f5f5f5;
  border-top: 2px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 90%;
    height: 10px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-top: 20px;
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
    height: 60px;
    color: #828282;
    font-size: 16px;
    background: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    margin-top: 40px;
  }
`;
