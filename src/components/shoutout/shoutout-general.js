import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Switch,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  FormGroup,
} from "@mui/material";
import { ChatOutlined, ErrorOutlineOutlined, MoreTimeOutlined } from "@mui/icons-material/";
import { useState, useEffect } from "react";
import axios from "axios";

export const ShoutoutGeneral = (props) => {
  let { channelname } = props;
  let initValues = {
    channel: channelname,
    delay: 250,
    enabled: true,
    soCommand: "so",
    soMessageEnabled: true,
    soMessageTemplate: ""
  }
  const [genSettings, setGenSettings] = useState(initValues);

  useEffect(() => {
    // console.log(process.env);
    let channel = "speeeedtv";
    let genSettingsURL = 
      process.env.REACT_APP_APIURL + "/channels/" + channel
   
    axios.get(genSettingsURL)
      .then((res) => {
        
        setGenSettings(res.data);
        console.log(genSettings);
      });
  }, []);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ONSUBMIT")
    console.log(genSettings);

    const data = genSettings;
    let updateSettingsURL = process.env.REACT_APP_APIURL + "/channels/saveGenSettings/speeeedtv"
    axios.post(updateSettingsURL,data).then((res) => {
      console.log(res)
    }).catch((err) => {console.log(err);} );

  }
  
  return (
    <form {...props} onSubmit={handleSubmit}>
      <Card>
        <CardHeader
          subheader="Manage the shoutout settings"
          title="General Settings"
        />
        <Divider />
        <CardContent>
          
          <Grid container spacing={6} wrap="wrap">
            <Grid
              item
              md={12}
              sm={12}
              sx={{ display: "flex", flexDirection: "column" }}
              xs={12}
            >
              <Typography color="textPrimary" gutterBottom variant="h6">
                Bot Enabled
              </Typography>
              <FormControlLabel
                control={<Switch checked={genSettings.enabled} onChange={(e) => setGenSettings({...genSettings,enabled: e.target.checked})} />}
                label="Bot is ON"
              />
              <Divider />
              <FormGroup sx={{ paddingTop: 2 }}>
                <Typography color="textPrimary" gutterBottom variant="h6" >
                  Shoutout command
                </Typography>
                <TextField
                  id="socmd"
                  label="Shoutout command"
                  value={genSettings.soCommand}
                  onChange={(e) => setGenSettings({...genSettings, soCommand: e.target.value})}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ErrorOutlineOutlined />
                      </InputAdornment>
                    ),
                  }}
                  sx={{marginTop: 2}}
                />
              </FormGroup>
              <FormGroup sx={{ paddingTop: 2 }}>
                <Typography color="textPrimary" gutterBottom variant="h6" >
                  Delay
                </Typography>
                <TextField
                  id="socmd"
                  label="Delay"
                  value={genSettings.delay}
                  onChange={(e) => setGenSettings({...genSettings, delay: e.target.value})}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MoreTimeOutlined />
                      </InputAdornment>
                    ),
                  }}
                  sx={{marginTop: 2}}
                />
              </FormGroup>
              <FormGroup sx={{ paddingTop: 2 }}>
                <Typography color="textPrimary" gutterBottom variant="h6">
                  Shoutout message
                </Typography>
                <FormControlLabel
                  control={<Switch checked={genSettings.soMessageEnabled} onChange={(e) => setGenSettings({...genSettings,soMessageEnabled: e.target.checked})} />}
                  label="Enabled"
                />
                
                <TextField id="somsg" label="Shoutout message" 
                  value={genSettings.soMessageTemplate}
                  onChange={(e) => setGenSettings({...genSettings, soMessageTemplate: e.target.value})}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ChatOutlined />
                      </InputAdornment>
                    ),
                  }}
                  sx={{marginTop: 2}}
                />
              </FormGroup>
            </Grid>
          </Grid>
         
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="primary" variant="contained" type="submit" >
            Save
          </Button>
        </Box>
      </Card>
    </form>
  );
};
