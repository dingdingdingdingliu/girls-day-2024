import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const TextWrapper = styled.span`
  display: ${(props) => (props.isLastIndex ? "inline" : "inline-block")};
  margin-bottom: ${(props) => (props.isLastIndex ? "0" : props.lineSpacing)};
`;

const useFormattedText = (text, lineSpacing = "10px") => {
  const [formattedText, setFormattedText] = useState("");

  useEffect(() => {
    const lastIndex = text?.split("\n").length - 1;
    const formatted = text?.split("\n").map((line, index) => (
      <TextWrapper
        key={index}
        isLastIndex={index === lastIndex}
        lineSpacing={lineSpacing}
      >
        {line}
      </TextWrapper>
    ));
    setFormattedText(formatted);
  }, [text, lineSpacing]);

  return formattedText;
};

export default useFormattedText;
