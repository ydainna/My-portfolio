import { IconButton, Tooltip, SvgIcon } from "@mui/material";
import { ITopNavItem } from "@utils/types/ITopNavItem";

const TopNavItem = ({ title, icon, onClick }: ITopNavItem) => {
  return (
    <li>
      <Tooltip arrow title={title}>
        <IconButton aria-label={title} component="button" onClick={onClick ? onClick : undefined}>
          <SvgIcon fontSize="medium">{icon}</SvgIcon>
        </IconButton>
      </Tooltip>
    </li>
  );
};

export default TopNavItem;
