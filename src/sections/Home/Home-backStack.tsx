import { Card, CardContent, CardHeader, Stack, Chip } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import DevIcon from "@components/Icons/DevIcon";
import { useTranslation } from "react-i18next";

const HomeBackStack = () => {
  const { t } = useTranslation();

  return (
    <>
      <Card>
        <CardHeader
          title={t("home.stack.titleBack")}
          subheader="Back-end"
          sx={{
            backgroundColor: "redColor.800",
            boxShadow: "0 1px 4px 0 rgb(0 0 0 / 37%)",
          }}
        />
        <CardContent>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid xs={2}>
              <Stack direction="column" spacing={1} alignItems="center">
                <DevIcon icon="devicon-mongodb-plain" size="4rem" color="secondary.main" />
                <Chip size="small" label="Mongo DB" />
              </Stack>
            </Grid>
            <Grid xs={2}>
              <Stack direction="column" spacing={1} alignItems="center">
                <DevIcon icon="devicon-mysql-plain" size="4rem" color="secondary.main" />
                <Chip size="small" label="Mysql" />
              </Stack>
            </Grid>
            <Grid xs={2}>
              <Stack direction="column" spacing={1} alignItems="center">
                <DevIcon icon="devicon-nodejs-plain" size="4rem" color="secondary.main" />
                <Chip size="small" label="Node.js" />
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
                <DevIcon icon="devicon-express-original" size="4rem" color="secondary.main" />
                <Chip size="small" label="Exress.js" />
              </Stack>
            </Grid>
            <Grid xs={2}>
              <Stack direction="column" spacing={1} alignItems="center">
                <DevIcon icon="devicon-javascript-plain" size="4rem" color="secondary.main" />
                <Chip size="small" label="Javascript" />
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default HomeBackStack;
