import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ShoutoutGeneral } from "../../components/shoutout/shoutout-general";

const ShoutOut = () => {

  let curUser = {};
  const [channelName, setChannelName] = useState("");

  let navigate = useNavigate();
 
  useEffect(() => {
    if(localStorage.getItem("curUser"))
    {
      curUser = JSON.parse(localStorage.getItem("curUser"))
      setChannelName(curUser.name);
    }else{
      navigate("/")
    }
  }, [])
   
  
   
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
          <ShoutoutGeneral channelname={channelName}/>
          
        </Container>
      </Box>
    </>
  );
};

ShoutOut.getLayout = (page) => ({ page });

export default ShoutOut;
