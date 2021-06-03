import React from "react";
import {
  Container,
  Content,
  Text,
  MM,
  MMBedge,
  MMContent,
  MMText,
  MMTitle,
} from "./styles/expertise";

export default function Expertise({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Expertise.Content = function ExpertiseContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Expertise.Text = function ExpertiseText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Expertise.MM = function ExpertiseMM({ children, ...restProps }) {
  return <MM {...restProps}>{children}</MM>;
};

Expertise.MMBedge = function ExpertiseMMBadge({ children, ...restProps }) {
  return <MMBedge {...restProps}>{children}</MMBedge>;
};

Expertise.MMContent = function ExpertiseMMContent({ children, ...restProps }) {
  return <MMContent {...restProps}>{children}</MMContent>;
};

Expertise.MMText = function ExpertiseMMText({ children, ...restProps }) {
  return <MMText {...restProps}>{children}</MMText>;
};

Expertise.MMTitle = function ExpertiseMMTitle({ children, ...restProps }) {
  return <MMTitle {...restProps}>{children}</MMTitle>;
};
