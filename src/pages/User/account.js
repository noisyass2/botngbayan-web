
import { Box, Container, Grid, Typography } from '@mui/material';
import { AccountProfile, setUser } from '../../components/account/account-profile';
import { AccountProfileDetails } from '../../components/account/account-profile-details';
import { useLocation } from 'react-router';
import { useNavigate } from "react-router-dom";
import * as React from "react";
import queryString from 'query-string';
import axios from "axios";

// http://localhost:3000/dashboard/redirect#access_token=p6tqf0h4ccl3f53it3rgwekafuqpqp&scope=user%3Aread%3Aemail+user%3Aread%3Afollows&state=undefined&token_type=bearer

const Account = () => {
  const location = useLocation();
  let params = queryString.parse(location.hash);
  let [user, setUser] = React.useState({
    avatar: '',
    city: '',
    country: '',
    jobTitle: '',
    name: '',
    timezone: 'GTM+8'
  })
//  if(localStorage.getItem("curUser") !== "") {
//     let storedUser = localStorage.getItem("curUser");
//     let curUser = {
//       avatar: storedUser.profile_image_url,
//       city: storedUser.broadcaster_type,
//       country: '',
//       jobTitle: '',
//       name: storedUser.login,
//       timezone: 'GTM+8'
//     };

//     setUser(curUser);
//   }
  let navigate = useNavigate();
  React.useEffect(() => {
    
    let {access_token} = params;
    console.log(access_token);
    if(access_token && localStorage.getItem("curUser") === "") {
      axios.get("https://api.twitch.tv/helix/users",{headers: {
        "Client-ID" : process.env.REACT_APP_CLIENT_ID,
        "Authorization" : "Bearer " + access_token
      }})
        .then((res) => {
          console.log(res);
          let curUser = {
            avatar: res.data.data[0].profile_image_url,
            city: res.data.data[0].broadcaster_type,
            country: '',
            jobTitle: '',
            name: res.data.data[0].login,
            timezone: 'GTM+8'
          };
          
          localStorage.setItem("curUser",JSON.stringify(curUser));
          setUser(curUser);
          navigate("/dashboard/shoutout")
        });
    }
  }, [params])

  return (
  <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg" disableGutters={true}>
          <Typography
            sx={{ mb: 3 }}
            variant="h4"
          >
            Account
          </Typography>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
              {
                user != null ? <AccountProfile newuser={user}/> : <h1>No User</h1>
              }
              
            </Grid>
            {/* <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <AccountProfileDetails />
            </Grid> */}
          </Grid>
        </Container>
      </Box>
     
  </>);

}

Account.getLayout = (page) => (
  <div>
    {page}
  </div>
);

export default Account;
