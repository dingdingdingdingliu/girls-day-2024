import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled";

const CommentsWord = styled.span`
  font-size: ${(props) => props.theme.fontSizes[14]};
  margin: 0px 4px;
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover .comment-content {
    visibility: visible;
    opacity: 1;
    transform: translateY(-10px);
  }
`;

const ContentWrapper = styled.div`
  position: fixed;
  background-color: ${(props) => props.theme.colors.lightGrey};
  color: ${(props) => props.theme.colors.black};
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  z-index: 1000;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
`;

const NoteText = styled.p`
  font-size: ${(props) => props.theme.fontSizes[14]};
  color: ${(props) => props.theme.colors.black};
`;

export default function Comments({ comments }) {
  const [hoverPosition, setHoverPosition] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const commentsWordRef = useRef(null);

  const handleMouseEnter = () => {
    const rect = commentsWordRef.current.getBoundingClientRect();
    setHoverPosition({
      top: rect.top + 18, // 控制浮動元素的高度
      left: rect.left - 80,
      width: 200,
    });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <CommentsWord
      ref={commentsWordRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      [註]
      {isHovered &&
        createPortal(
          <ContentWrapper
            style={{
              top: hoverPosition.top,
              left: hoverPosition.left,
              width: hoverPosition.width,
            }}
          >
            <NoteText>
              {comments?.text}
              <br />
              {comments?.commentLink && (
                <a
                  href={comments?.commentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="under-line"
                >
                  {comments?.commentLink}
                </a>
              )}
            </NoteText>
          </ContentWrapper>,
          document.body,
        )}
    </CommentsWord>
  );
}
