import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component={"footer"}
      sx={{
        backgroundColor: "redColor.800",
        color: "white",
        py: 2,
        px: 4,
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body2" component="p">
          © {new Date().getFullYear()} - {"ydainna.com"}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
