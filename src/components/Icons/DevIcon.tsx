import { Box } from "@mui/material";
import { IDevIcon } from "@utils/types/IDevIcon";

const DevIcon = ({ icon, color, size }: IDevIcon) => {
  return (
    <Box
      component="i"
      className={icon}
      sx={{
        color: color,
        fontSize: size,
      }}
    />
  );
};

export default DevIcon;
