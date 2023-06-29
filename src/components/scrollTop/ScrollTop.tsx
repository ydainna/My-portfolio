import { Box, Fade, useScrollTrigger, Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";
import { IScrollTop } from "@utils/types/IScrollTop";

const ScrollTop = ({ children }: IScrollTop) => {
  const { t } = useTranslation();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Tooltip title={t("layout.buttonBackToTop")} arrow>
        <Box onClick={handleClick} role="presentation" sx={{ position: "fixed", bottom: 16, right: 16 }}>
          {children}
        </Box>
      </Tooltip>
    </Fade>
  );
};

export default ScrollTop;
