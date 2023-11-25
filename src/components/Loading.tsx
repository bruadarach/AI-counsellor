import { styled } from "styled-components";
import spinner from "../assets/spinner/spinner.svg";

const Loading = () => {
  return (
    <Container>
      <div>
        <img src={spinner} alt="spinner" width="100" height="100" />
      </div>
      <div>
        <div>Now GPT is analyzing and writing your counseling log.</div>
        <div>Please wait a moment, it may take some time to prepare.</div>
      </div>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  color: #313131;
`;
