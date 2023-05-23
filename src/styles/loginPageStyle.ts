import styled from "styled-components";

export const SignUpPage = styled.div`
  background: #dddddd;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .inside-box {
    width: 500px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    border-radius: 16px;
    background-color: #ffffff;
    font-family: "Roboto";
    padding: 2em 1em 1em 3em;
    h1 {
      font-size: 22px;
      font-weight: 700;
      padding-bottom: 1em;
    }
    h2 {
      font-size: 16px;
      font-weight: 400;
      padding-bottom: 0.8em;
    }
    input {
      width: 90%;
      height: 32px;
      border-radius: 8px;
      border: 1px solid #777777;
      font-size: 18px;
      padding-left: 0.5em;
    }
    button {
      height: 32px;
      width: 111px;
      background: #7695ec;
      color: #ffffff;
      border-radius: 8px;
      border: none;
    }
    button:disabled {
      background-color: #777777;
    }
    .button-wrapper {
      width: 92%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 1em;
      padding-bottom: 1em;
    }
  }
`;
