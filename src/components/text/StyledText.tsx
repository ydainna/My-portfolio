import { Box } from "@mui/material";
import { IStyledText } from "@utils/types/IStyledText";

const StyledText = ({ children }: IStyledText) => {
  return (
    <>
      {" "}
      <Box
        component="span"
        sx={{
          color: "secondary.main",
          fontWeight: "bold",
        }}
      >
        {children}
      </Box>{" "}
    </>
  );
};

export default StyledText;
