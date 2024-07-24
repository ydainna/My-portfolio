import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { IconButton, Box, Card, CardContent, CardHeader, Typography, SvgIcon, Button, Stack, Tooltip } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import StyledText from "@components/text/StyledText";
import { Constants } from "@utils/Constants";
import Discord from "@assets/icons/discord.svg?react";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";

const HomPresentation = () => {
  const [textCopied, setTextCopied] = useState(false);

  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const { t } = useTranslation();

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setTextCopied(true);
    setOpen(true);
    setTimeout(() => {
      setTextCopied(false);
    }, 2000);
  };

  return (
    <>
      <Card>
        <CardHeader
          title={t("home.about.title")}
          subheader={t("home.about.subTitle")}
          sx={{
            backgroundColor: "redColor.800",
            boxShadow: "0 1px 4px 0 rgb(0 0 0 / 37%)",
          }}
        />
        <CardContent>
          <Typography variant="body2" component="p">
            <Trans
              i18nKey="home.about.text"
              components={{
                StyledText: <StyledText children={undefined} />,
              }}
            />
          </Typography>
          <Box
            sx={{
              pt: 2,
            }}
          >
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Tooltip arrow title={t("home.about.tooltip.buttonCv")}>
                <IconButton color="secondary" size="small" component="a" href={"/csv.pdf"} target="_blank" rel="noopener noreferrer">
                  <SvgIcon fontSize="large">
                    <SimCardDownloadIcon />
                  </SvgIcon>
                </IconButton>
              </Tooltip>
              <Tooltip
                onClose={handleTooltipClose}
                open={open}
                onOpen={() => setOpen(true)}
                arrow
                title={textCopied ? t("home.about.tooltip.buttonDiscordCopied") : t("home.about.tooltip.buttonDiscordDefault")}
              >
                <Button
                  startIcon={<SvgIcon component={Discord} fontSize="medium" inheritViewBox />}
                  variant="outlined"
                  color="secondary"
                  size="small"
                  component="button"
                  onClick={() => copyText(Constants.DISCORD)}
                >
                  {Constants.DISCORD}
                </Button>
              </Tooltip>

              <Tooltip arrow title="Email">
                <Button
                  startIcon={
                    <SvgIcon fontSize="medium">
                      <EmailIcon />
                    </SvgIcon>
                  }
                  variant="contained"
                  color="secondary"
                  size="small"
                  component="a"
                  onClick={() => window.open(`mailto:${Constants.MAIL}`)}
                >
                  {t("home.about.buttonContact")}
                </Button>
              </Tooltip>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default HomPresentation;
