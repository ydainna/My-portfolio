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
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Container maxWidth="sm">
            <NotFoundError />
          </Container>
        </Box>
      </Layout>
      {/*
 __                 
'. \  🅷🅴🅻🅻🅾, 🅼🆈 🅽🅰🅼🅴 🅸🆂 🅴🅻🅼🅴🆁 ❗
 '- \               
  / /_         .---.
 / | \\,.\/--.//    )
 |  \//        )/  / 
  \  ' ^ ^    /    )____.----..  6
   '.____.    .___/            \._) 
      .\/.                      )
       '\                       /
       _/ \/    ).        )    (
      /#  .!    |        /\    /
      \  C// #  /'-----''/ #  / 
   .   'C/ |    |    |   |    |  ,
   \), .. .'OOO-'. ..'OOO'OOO-'. ..\(,
   
*/}
    </>
  );
};

export default NotFound;
