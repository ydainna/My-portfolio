import { styled, Fab } from "@mui/material";
import TopNav from "@layout/TopNav";
import Footer from "@layout/Footer";
import ScrollTop from "@components/scrollTop/ScrollTop";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import type { ILayout } from "@utils/types/ILayout";

const LayoutRoot = styled("div")(() => ({
  display: "flex",
  height: "100%",
  overflow: "hidden",
  width: "100%",
}));

const LayoutContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  width: "100%",
});

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <TopNav id="back-to-top-anchor" />
      <LayoutRoot>
        <LayoutContainer>{children}</LayoutContainer>
      </LayoutRoot>
      <Footer />
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default Layout;
