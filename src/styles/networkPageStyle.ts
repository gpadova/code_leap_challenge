import styled from "styled-components";

export const EntirePage = styled.div`
  background: #dddddd;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  overflow-y: visible;
  overflow-x: auto;
  @media (max-width: 480px) {
    background-color: #ffffff;
  }
`;
export const CenteredDiv = styled.div`
  height: fit-content;
  width: 60%;
  background: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20px;
  @media (max-width: 480px) {
    width: 90%;
  }
  .header {
    min-height: 80px;
    width: 100%;
    background: #7695ec;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    h1 {
      font-family: "Roboto";
      color: #ffffff;
      font-weight: 700;
      font-size: 22px;
      padding-left: 37px;
    }
  }
`;
