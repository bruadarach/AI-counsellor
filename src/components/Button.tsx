import { styled } from "styled-components";

interface ButtonProps {
  name: string;
  isLoading: boolean;
  handleClick: () => void;
  backgroundColor?: string;
  hoverColor?: string;
}

const Button = ({
  name,
  isLoading,
  handleClick,
  backgroundColor,
  hoverColor,
}: ButtonProps) => {
  return (
    <Style
      onClick={handleClick}
      disabled={isLoading}
      $backgroundColor={backgroundColor}
      $hoverColor={hoverColor}
    >
      {name}
    </Style>
  );
};

export default Button;

const Style = styled.button<{
  $backgroundColor?: string;
  $hoverColor?: string;
}>`
  margin: 0 auto;
  display: block;
  width: 220px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background: ${(props) => props.$backgroundColor || "#e15b64"};
  color: #f4f4f4;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.$hoverColor || "#e15b64cd"};
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media screen and (max-width: 280px) {
    width: 100%;
  }
`;
