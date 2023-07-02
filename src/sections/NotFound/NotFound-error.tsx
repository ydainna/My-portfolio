import { Alert, AlertTitle, Card, CardContent, Stack } from "@mui/material";
import CatEat from "@assets/images/cat-eat.png";

const NotFoundError = () => {
  return (
    <Stack spacing={3}>
      <Card>
        <CardContent>
          <Alert severity="error" sx={{ mb: 2 }}>
            <AlertTitle>404 - Error 😢</AlertTitle>
            La page que vous recherchez n'existe pas. Allez savoir pourquoi...
          </Alert>
          <img
            src={CatEat}
            alt="notfound-picture"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
              width: "100%",
              maxWidth: "600px",
            }}
          />
        </CardContent>
      </Card>
    </Stack>
  );
};

export default NotFoundError;
