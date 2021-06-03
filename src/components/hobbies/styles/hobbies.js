import styled from "styled-components";

export const Container = styled.div`
  margin: 10rem 15rem;
`;

export const Content = styled.div`
  margin: 1.8rem;
  width: 100%;
  padding: 2.3rem;
  transition: all 0.5s;
  box-shadow: 0 0 1px 0 rgba(6, 24, 44, 0.18), 0 1px 2px 0 rgba(6, 24, 44, 0.2);
  &:hover {
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }
`;

export const Text = styled.p`
  font-size: 1.4rem;
`;
