import React, { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";
import Top from "../images/top.png";
import { Nav } from "react-bootstrap";

function ScrollToTop() {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  if (!visible) {
    return false;
  }

  return (
    <Nav.Link id="go-top" href="#top" onClick={scrollToTop}>
      <span className="top" title="Back to Top">
        <img alt="" src={Top} href="#top" />
      </span>
    </Nav.Link>
  );
}

export default ScrollToTop;
