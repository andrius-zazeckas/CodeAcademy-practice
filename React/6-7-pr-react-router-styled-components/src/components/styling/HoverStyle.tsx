import styled from "styled-components";

export const Hover = styled.tr`
  :hover {
    transition-property: background;
    transition-duration: 1s;
    transition-timing-function: linear;
    background: ${(props) => props.color || "grey"};
    color: white;
    box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.3);
    transform: translate(0, -1px);
    cursor: pointer;
  }
`;
