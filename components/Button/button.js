import styled from "@emotion/styled";

const ButtonStyle = styled.div`
  height: 40px;
  width: 200px;
  border-radius: 20px;
  border: 2px solid violet;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

function Button({ onButtonClick, text }) {
  return <ButtonStyle onClick={onButtonClick}>{text}</ButtonStyle>;
}

export default Button;
