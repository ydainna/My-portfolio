import { Box } from "@mui/material";
import { IFlagIcon } from "@utils/types/IFlagIcon";

const FlagIcon = ({ icon, size }: IFlagIcon) => {
  return (
    <Box
      component="i"
      className={icon}
      sx={{
        fontSize: size,
      }}
    />
  );
};

export default FlagIcon;
