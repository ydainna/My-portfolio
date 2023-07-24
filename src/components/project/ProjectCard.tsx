import { Typography, Button, Card, CardHeader, CardMedia, Stack, CardContent, CardActions } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { useTranslation } from "react-i18next";
import { ICardProject } from "@utils/types/ICardProject";

const ProjectCard = ({ title, description, picture, isDisableWeb, isDisableGit, webLink, gitLink }: ICardProject) => {
  const { t } = useTranslation();

  return (
    <>
      <Grid xs={12} lg={4} sm={6}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia
            component="img"
            image={picture}
            alt={title}
            sx={{
              height: 140,
            }}
          />
          <CardHeader
            title={title}
            sx={{
              backgroundColor: "redColor.800",
              boxShadow: "0 1px 4px 0 rgb(0 0 0 / 37%)",
            }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              mt: "auto",
            }}
          >
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button
                variant="contained"
                startIcon={<GitHubIcon />}
                color="secondary"
                size="small"
                component="a"
                disabled={isDisableGit}
                onClick={() => window.open(gitLink, "_blank")}
              >
                GitHub
              </Button>
              <Button
                variant="contained"
                startIcon={<LinkIcon />}
                color="secondary"
                size="small"
                component="a"
                disabled={isDisableWeb}
                onClick={() => window.open(webLink, "_blank")}
              >
                {t("home.projects.buttonLink")}
              </Button>
            </Stack>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default ProjectCard;
