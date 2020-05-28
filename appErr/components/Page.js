import React, { useEffect } from "react";
import Container from "./Container";

function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | Our App`;
    window.scrollTo(0, 0);
  }, []);
  return <Container>{props.children}</Container>;
}

export default Page;
