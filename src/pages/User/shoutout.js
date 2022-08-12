import { Box, Container, Typography } from "@mui/material";
import { ShoutoutGeneral } from "../../components/shoutout/shoutout-general";

const ShoutOut = (props) => {
  
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg" disableGutters={true}>
          <Typography sx={{ mb: 3 }} variant="h4">
            ShoutOuts Settings
          </Typography>
          <ShoutoutGeneral />
        </Container>
      </Box>
    </>
  );
};

ShoutOut.getLayout = (page) => ({ page });

export default ShoutOut;
