import { Box, Container, Typography } from "@mui/material";
const CustomCommands = () => {

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
            Custom Commands
          </Typography>
          In Progress
        </Container>
      </Box>
    </>
    );
  };
  
CustomCommands.getLayout = (page) => ({ page });

export default CustomCommands;