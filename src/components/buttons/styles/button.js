import styled from "styled-components";
import { primaryColor } from "../../../colors/colors";

export const CvButton = styled.button`
  background-color: ${primaryColor};
  padding: 15px 32px;
  font-size: 14px;
  font-weight: 700;
  transition: all 0.5s;
  letter-spacing: 0.6px;
  color: #fff;
  box-shadow: none !important;
  text-transform: uppercase;
  outline: none !important;
  margin: 1rem;
  border: none;
  border-radius: 0.4rem;

  &:hover {
    background-color: #e65f78;
  }
`;

export const LatterButton = styled.button``;
