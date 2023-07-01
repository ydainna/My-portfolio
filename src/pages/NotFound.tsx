import { Box, Container } from "@mui/material";
import Layout from "@layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <h1>404</h1>
        </Container>
      </Box>
    </Layout>
  );
};

export default NotFound;
