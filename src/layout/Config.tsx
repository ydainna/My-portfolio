import { SvgIcon } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import { Constants } from "@utils/Constants";

export const items = [
  {
    title: "Github",
    onClick: () => window.open(Constants.GITHUB, "_blank"),
    icon: (
      <SvgIcon fontSize="medium" color="secondary">
        <GitHubIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Linkedin",
    onClick: () => window.open(Constants.LINKEDIN, "_blank"),
    icon: (
      <SvgIcon fontSize="medium" color="secondary">
        <LinkedinIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Twitter",
    onClick: () => window.open(Constants.TWITTER, "_blank"),
    icon: (
      <SvgIcon fontSize="medium" color="secondary">
        <TwitterIcon />
      </SvgIcon>
    ),
  },
];
