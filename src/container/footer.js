import React from "react";
import { Footer } from "../components";
import { FacebookIcon, InkedInIcon } from "../icons/icons";

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.List>
        <Footer.ListItem>
          <Footer.Link href="www.facebok.com/">
            <FacebookIcon />
          </Footer.Link>
        </Footer.ListItem>
        <Footer.ListItem>
          <Footer.Link href="www.facebok.com/">
            <InkedInIcon />
          </Footer.Link>
        </Footer.ListItem>
      </Footer.List>
      <Footer.Text>2018 - 2020 © Sibara. Design by Weblinnk.</Footer.Text>
    </Footer>
  );
}
