import { Box, Container } from "@mui/material";
import Layout from "@layout/Layout";
import NotFoundError from "@sections/NotFound/NotFound-error";

const NotFound = () => {
  return (
    <>
      <Layout>
        <Box
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth="sm">
            <NotFoundError />
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export default NotFound;
