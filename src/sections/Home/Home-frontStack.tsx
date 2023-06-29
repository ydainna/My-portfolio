import { Card, CardContent, CardHeader, Stack, Chip } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import DevIcon from "@components/Icons/DevIcon";
import { useTranslation } from "react-i18next";

const HomeFrontStack = () => {
  const { t } = useTranslation();

  return (
    <>
      <Card sx={{ height: "100%" }}>
        <CardHeader
          title={t("home.stack.titleFront")}
          subheader="Frontend"
          sx={{
            backgroundColor: "redColor.800",
            boxShadow: "0 1px 4px 0 rgb(0 0 0 / 37%)",
          }}
        />
        <CardContent>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid xs={2}>
              <Stack direction="column" spacing={1} alignItems="center">
                <DevIcon icon="devicon-react-original" size="4rem" color="secondary.main" />
                <Chip size="small" label="React.js" />
              </Stack>
            </Grid>
            <Grid xs={2}>
              <Stack direction="column" spacing={1} alignItems="center">
                <DevIcon icon="devicon-html5-plain" size="4rem" color="secondary.main" />
                <Chip size="small" label="HTML 5" />
              </Stack>
            </Grid>
            <Grid xs={2}>
              <Stack direction="column" spacing={1} alignItems="center">
                <DevIcon icon="devicon-css3-plain" size="4rem" color="secondary.main" />
                <Chip size="small" label="CSS 3" />
              </Stack>
            </Grid>
            <Grid xs={2}>
              <Stack direction="column" spacing={1} alignItems="center">
                <DevIcon icon="devicon-javascript-plain" size="4rem" color="secondary.main" />
                <Chip size="small" label="Javascript" />
              </Stack>
            </Grid>
            <Grid xs={2}>
              <Stack direction="column" spacing={1} alignItems="center">
                <DevIcon icon="devicon-typescript-plain" size="4rem" color="secondary.main" />
                <Chip size="small" label="Typescript" />
              </Stack>
            </Grid>
            <Grid xs={2}>
              <Stack direction="column" spacing={1} alignItems="center">
                <DevIcon icon="devicon-sass-plain" size="4rem" color="secondary.main" />
                <Chip size="small" label="Sass" />
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default HomeFrontStack;
