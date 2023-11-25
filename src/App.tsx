import { useState } from "react";
import { styled } from "styled-components";
import { CallGPT } from "./api/gpt";
import Loading from "./components/Loading";
import RequestInput from "./components/RequestInput";
import ResultDisplay from "./components/ResultDisplay";

function App() {
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState({
    title: "",
    thumbnail: "",
    summary: "",
    emotional_content: "",
    emotional_insight: "",
    analysis: "",
    action_list: [],
  });

  const handleUserInput = (value: string) => {
    setUserInput(value);
  };

  const hadnleCallAPI = async () => {
    if (userInput === "") {
      alert("Please write down your concerns.");
      return;
    }

    setIsSubmitted(false);

    try {
      setIsLoading(true);
      const message = await CallGPT(userInput);
      setData(JSON.parse(message));
      setIsSubmitted(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>AI Psychological Counseling Service</Title>
        <SubTitle>
          Pour out your daily concerns and worries to me, your GPT Counselor.
        </SubTitle>
        <SubTitle> Your challenges, My concrete remedies!</SubTitle>
        <UserInput>
          <RequestInput
            userInput={userInput}
            handleUserInput={handleUserInput}
          />
        </UserInput>
        <Button onClick={hadnleCallAPI} disabled={isLoading}>
          Provide Counseling Note
        </Button>
        <CounselingLog>
          {isLoading && <Loading />}
          <Line />
          {!isLoading && isSubmitted && <ResultDisplay data={data} />}
        </CounselingLog>
      </Wrapper>
    </Container>
  );
}

export default App;

const Container = styled.div`
  font-family: "Open Sans", sans-serif;
  max-width: 768px;
  min-width: 250px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  padding: 60px;
  width: 100%;

  @media screen and (max-width: 640px) {
    padding: 30px;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  margin: 10px 0;
  color: #0c3f1a;

  @media screen and (max-width: 640px) {
    padding: 30px;
  }

  @media screen and (max-width: 320px) {
    font-size: 26px;
  }
`;

const SubTitle = styled.div`
  text-align: center;
  margin-top: 5px;
  font-size: 15px;
  color: #87995c;
  font-weight: 300;
`;

const UserInput = styled.div`
  margin: 40px 0;
  width: 100%;
`;

const Button = styled.button`
  margin: 0 auto;
  display: block;
  width: 220px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background: #e15b64;
  color: #f4f4f4;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #e15b64cd;
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media screen and (max-width: 280px) {
    width: 100%;
  }
`;

const Line = styled.div`
  margin: 40px 0;
  border-top: 4px dotted #abbd81;
`;

const CounselingLog = styled.div`
  width: 100%;
`;
