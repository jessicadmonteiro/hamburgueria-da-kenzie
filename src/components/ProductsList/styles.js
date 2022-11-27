import styled from "styled-components";

export const DivContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Quest = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  h2 {
    font-size: 26px;
    color: #333333;
  }

  span {
    font-size: 26px;
    color: #828282;
  }

  button {
    width: 137px;
    height: 40px;
    color: #ffffff;
    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 8px;
  }

  @media (max-width: 844px) {
    h2,
    span {
      font-size: 16px;
    }

    button {
      width: 100px;
      height: 30px;
      font-size: 12px;
    }
  }
`;

export const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  li {
    width: 215px;
    height: 320px;
    border: 2px solid #e0e0e0;
    border-radius: 5px;
  }

  div {
    width: 100%;
    height: 50%;
    background: #f5f5f5;
    display: flex;
    justify-content: center;
  }

  h3 {
    font-size: 16px;
    color: #333333;
    padding: 10px 20px;
  }

  p {
    font-size: 12px;
    color: #828282;
    padding: 0 0 10px 20px;
  }

  h5 {
    font-size: 14px;
    color: #27ae60;
    padding-left: 20px;
  }

  button {
    width: 45%;
    height: 40px;
    color: #ffffff;
    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 8px;
    margin: 10px 20px;
  }

  @media (max-width: 800px) {
    height: 350px;
    flex-wrap: nowrap;
    flex-direction: row;
    overflow-x: auto;
    
  }
`;
