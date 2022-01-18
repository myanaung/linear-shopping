import React, { useState, useEffect } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useWindowScroll } from "react-use";
import { ToTopButton, ToTopButtonContainer } from "./ScrollToTop-styles";

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();

  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    if (pageYOffset > 200) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visibility) {
    return false;
  }

  return (
    <ToTopButtonContainer>
      <ToTopButton onClick={scrollToTop}>
        <ExpandLessIcon />
      </ToTopButton>
    </ToTopButtonContainer>
  );
};

export default ScrollToTop;
