import { useState } from "react";
import { Badge, Typography, Tooltip, Box, Stack, SvgIcon, useMediaQuery, Menu, MenuItem, IconButton } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { items } from "@layout/Config";
import TopNavItem from "@layout/TopNav-item";
import Logo from "@assets/images/logo.svg?react";
import SelectLanguage from "@components/language/SelectLanguage";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTranslation } from "react-i18next";
import { Constants } from "@utils/Constants";
import { ITopNav } from "@utils/types/ITopNav";

const TOP_NAV_HEIGHT = 64;

const TopNav = ({ id }: ITopNav) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [available] = useState(Constants.AVAILABLE);

  const { t } = useTranslation();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));

  const contentHeader = items.map((item) => {
    return <TopNavItem key={item.title} icon={item.icon} title={item.title} onClick={item.onClick} />;
  });

  const contentMenu = items.map((item) => {
    return (
      <MenuItem key={item.title} onClick={handleClose}>
        <TopNavItem icon={item.icon} title={item.title} onClick={item.onClick} />
      </MenuItem>
    );
  });

  const content = lgUp ? contentHeader : contentMenu;

  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: "blur(6px)",
          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.8),
          boxShadow: "0 1px 4px 0 rgb(0 0 0 / 37%)",
          position: "sticky",
          top: 0,
          zIndex: (theme) => theme.zIndex.appBar,
        }}
        id={id}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2,
          }}
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            <SvgIcon fontSize="large" component={Logo} inheritViewBox />
          </Stack>
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            component={"ul"}
            sx={{
              listStyle: "none",
              m: 0,
              p: 0,
            }}
          >
            {" "}
            <Tooltip arrow title={available ? t("navbar.tooltip.available") : t("navbar.tooltip.unavailable")}>
              <Badge
                color={available ? "success" : "error"}
                variant="dot"
                overlap="circular"
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "greenColor.500",
                    boxShadow: "0 0 0 2px white",
                    width: "10px",
                    height: "10px",
                  },
                }}
              >
                <Typography variant="h6" component="p">
                  🐘
                </Typography>
              </Badge>
            </Tooltip>
            <SelectLanguage />
            {lgUp ? (
              content
            ) : (
              <IconButton
                id="reseau-button"
                aria-controls="reseau-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
            )}
          </Stack>
        </Stack>
        <Menu
          id="reseau-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "reseau-button",
          }}
        >
          {content}
        </Menu>
      </Box>
    </>
  );
};

export default TopNav;
