import { styled } from "styled-components";

interface RequestInputProps {
  userInput: string;
  handleUserInput: (value: string) => void;
}

const RequestInput = ({ userInput, handleUserInput }: RequestInputProps) => {
  return (
    <Note>
      <NoteContent>
        <TextArea
          autoFocus
          placeholder="How's your day? Feel free to share any concerns or thoughts you may have. I'm here for you to listen, care, and genuinely assist with a warm heart."
          value={userInput}
          onChange={(e) => handleUserInput(e.target.value)}
        />
      </NoteContent>
    </Note>
  );
};

export default RequestInput;

const Note = styled.div`
  position: relative;
  width: 100%;
  max-width: 768px;
  min-height: 300px;
  margin: 0 auto;
  background: #fafafa;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 60px;
    background: radial-gradient(#d8d5d0 6px, transparent 7px) repeat-y;
    background-size: 30px 30px;
    border-right: 3px solid #e15b64;
    box-sizing: border-box;
  }
`;

const NoteContent = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  bottom: 30px;
  left: 60px;
  background: linear-gradient(transparent, transparent 28px, #d8d5d0 28px);
  background-size: 30px 30px;
`;

const TextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  height: 100%;
  line-height: 30.5px;
  padding: 0 10px;
  border: 0;
  outline: 0;
  background: transparent;
  color: #444;
  font-family: "Indie Flower", cursive, "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 17px;
  box-sizing: border-box;
  z-index: 1;

  &::placeholder {
    color: #b4b4b4;
  }

  @media screen and (max-width: 320px) {
    padding: 0 5px;
  }
`;
