import { useEffect } from "react";
import { Box, Container, Card, CardHeader } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Layout from "@layout/Layout";
import { useTranslation } from "react-i18next";

import HomePresentation from "@sections/Home/Home-presentation";
import HomeBackStack from "@sections/Home/Home-backStack";
import HomeFrontStack from "@sections/Home/Home-frontStack";
import HomeElephant from "@sections/Home/Home-elephant";
import HomeProject from "@sections/Home/Home-project";

const Home = () => {
  useEffect(() => {
    document.title = "Porfolio ◦ Home";
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Layout>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth="xl">
            {/* About section*/}
            <Grid container spacing={3}>
              {/* About presentation*/}
              <Grid xs={12} md={4}>
                <HomePresentation />
              </Grid>

              {/* Lottie animation*/}
              <Grid xs={12} md={8}>
                <HomeElephant />
              </Grid>
            </Grid>

            {/* Stacks section*/}
            <Grid container spacing={3} columnSpacing={12}>
              {/* Stacks front-section*/}
              <Grid xs={12} lg={6}>
                <HomeFrontStack />
              </Grid>

              {/* Stacks back-section*/}
              <Grid xs={12} lg={6}>
                <HomeBackStack />
              </Grid>
            </Grid>

            {/* Project section*/}
            <Grid container spacing={3} marginTop={5}>
              <Grid xs={12}>
                <Card
                  sx={{
                    backgroundColor: "redColor.800",
                    boxShadow: "0 1px 4px 0 rgb(0 0 0 / 37%)",
                  }}
                >
                  <CardHeader title={t("home.projects.title")} />
                </Card>
              </Grid>
              <HomeProject />
            </Grid>
          </Container>
        </Box>
      </Layout>
    </>
  );
};
export default Home;
