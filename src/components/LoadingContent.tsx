import styled from "styled-components";

export default function PostBlock() {

  return (
    <Box>
      <TitleHeader>
        <h2>Loading...</h2>
        <div>
        </div>
      </TitleHeader>
      <PostContent>
        <div className="owner-and-time">
          <p className="username">@Loading...</p>
          <p>Loading...</p>
        </div>
        <div className="content">
          <p>Loading...</p>
        </div>
      </PostContent>
    </Box>
  );
}

const Box = styled.div`
  width: 90%;
  height: auto;
  border: 1px solid #999999;
  border-radius: 16px;
  margin-top: 3em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 0 15px;
`;
const TitleHeader = styled.div`
  background: #7695ec;
  color: #ffffff;
  width: 100%;
  height: 70px;
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  font-size: 25px;

  .icon1 {
    padding-right: 10px;
  }
  .icon1:hover,
  .icon2:hover {
    cursor: grab;
  }
  h2 {
    padding-left: 1em;
    font-size: 22px;
    font-family: "Roboto";
  }
  @media (max-width: 480px) {
    h2 {
      font-size: 30px;
    }
  }
`;

const PostContent = styled.div`
  width: 100%;
  height: auto;
  .owner-and-time {
    display: flex;
    justify-content: space-between;
    padding: 1em 2em;
    p {
      color: #777777;
      font-size: 18px;
      font-family: "Roboto";
    }
    .username {
      font-weight: 700;
    }
  }
  .content {
    margin: 1em 2em;
    font-size: 18px;
    font-family: "Roboto";
    p {
      text-align: justify;
    }
  }
  @media (max-width: 480px) {
    .owner-and-time {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
    }
  }
`;
