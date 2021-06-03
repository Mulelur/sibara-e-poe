import React from "react";
import { SectionHeader } from "../../components";

export default function SectionHeaderContainer() {
  return (
    <SectionHeader>
      <SectionHeader.Container>
        <SectionHeader.Heading4>Welcome</SectionHeader.Heading4>
        <SectionHeader.Heading1>I'M A Softwer Engener</SectionHeader.Heading1>
        <SectionHeader.Text>
          Productivity is never an accident. It’s always the result of a
          commitment to excellence, intelligent planning, and focused effort.
        </SectionHeader.Text>
        <SectionHeader.Download>DownLoad CV</SectionHeader.Download>
      </SectionHeader.Container>
    </SectionHeader>
  );
}
