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
  Checkbox,
  Snackbar,
  Alert
} from "@mui/material";
import {
  ChatOutlined,
  ErrorOutlineOutlined,
  MoreTimeOutlined,
} from "@mui/icons-material/";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../pages/User/dashboard";


let initValues = {
  channel: "",
  delay: 250,
  enabled: true,
  soCommand: "so",
  soMessageEnabled: true,
  soMessageTemplate: "",
  filters: {
    vip: true,
    mod: true,
    sub: true,
    any: true
  }
};
export const ShoutoutGeneral = (props) => {
  const contextValue = useContext(UserContext);
  console.log(contextValue);
  
  const [genSettings, setGenSettings] = useState(initValues);
  const [state,setState] = useState({
    succcessOpen: false,
    failedOpen: false
  });

  const {successOpen, failedOpen} = state;

  const handleClose = () => {
    setState({succcessOpen: false,
      failedOpen: false});
  };

  useEffect(() => {
    if(contextValue && contextValue.channel !== ""){
      setGenSettings(contextValue);
    }
  },[contextValue])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ONSUBMIT");
    console.log(genSettings);

    const data = genSettings;
    let updateSettingsURL =
      process.env.REACT_APP_APIURL + "/channels/saveGenSettings/" + contextValue.channel;
    axios
      .post(updateSettingsURL, data)
      .then((res) => {
        console.log(res);
        setState({...state, successOpen: true})
      })
      .catch((err) => {
        console.log(err);
        setState({...state, failedOpen: true})
      });
  };

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
                control={
                  <Switch
                    checked={genSettings.enabled}
                    onChange={(e) =>
                      setGenSettings({
                        ...genSettings,
                        enabled: e.target.checked,
                      })
                    }
                  />
                }
                label="Bot is ON"
              />
              <Divider />
              <FormGroup sx={{ paddingTop: 2 }}>
                <Typography color="textPrimary" gutterBottom variant="h6">
                  Shoutout command
                </Typography>
                <TextField
                  id="socmd"
                  label="Shoutout command"
                  value={genSettings.soCommand}
                  onChange={(e) =>
                    setGenSettings({
                      ...genSettings,
                      soCommand: e.target.value,
                    })
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ErrorOutlineOutlined />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ marginTop: 2 }}
                />
              </FormGroup>
              <FormGroup sx={{ paddingTop: 2 }}>
                <Typography color="textPrimary" gutterBottom variant="h6">
                  Delay
                </Typography>
                <TextField
                  id="socmd"
                  label="Delay"
                  value={genSettings.delay}
                  onChange={(e) =>
                    setGenSettings({ ...genSettings, delay: e.target.value })
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MoreTimeOutlined />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ marginTop: 2 }}
                />
              </FormGroup>
              {/* <FormGroup sx={{ paddingTop: 2 }}>
                <Typography color="textPrimary" gutterBottom variant="h6">
                  Shoutout message
                </Typography>
                <FormControlLabel
                  control={
                    <Switch
                      checked={genSettings.soMessageEnabled}
                      onChange={(e) =>
                        setGenSettings({
                          ...genSettings,
                          soMessageEnabled: e.target.checked,
                        })
                      }
                    />
                  }
                  label="Enabled"
                />

                <TextField
                  id="somsg"
                  label="Shoutout message"
                  value={genSettings.soMessageTemplate}
                  onChange={(e) =>
                    setGenSettings({
                      ...genSettings,
                      soMessageTemplate: e.target.value,
                    })
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ChatOutlined />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ marginTop: 2 }}
                />
              </FormGroup> */}
              <FormGroup sx={{ paddingTop: 2 }}>
                <Typography color="textPrimary" gutterBottom variant="h6">
                  Filters
                </Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={genSettings.filters.vip}
                      onChange={(e) =>
                        setGenSettings({
                          ...genSettings,
                          filters:{ ...genSettings.filters, vip: e.target.checked} ,
                        })
                      }
                    />
                  }
                  label="VIPs"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={genSettings.filters.mod}
                      onChange={(e) =>
                        setGenSettings({
                          ...genSettings,
                          filters:{ ...genSettings.filters, mod: e.target.checked} ,
                        })
                      }
                    />
                  }
                  label="MODs"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={genSettings.filters.sub}
                      onChange={(e) =>
                        setGenSettings({
                          ...genSettings,
                          filters:{ ...genSettings.filters, sub: e.target.checked} ,
                        })
                      }
                    />
                  }
                  label="SUBs"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={genSettings.filters.any}
                      onChange={(e) =>
                        setGenSettings({
                          ...genSettings,
                          filters:{ ...genSettings.filters, any: e.target.checked} ,
                        })
                      }
                    />
                  }
                  label="ANY"
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
          <Button color="primary" variant="contained" type="submit">
            Save
          </Button>
        </Box>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={successOpen}
          onClose={handleClose}
          key="snackSave"
          severity="success"
        >
           <Alert severity="success" variant="filled">Settings Saved!</Alert>
        </Snackbar>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={failedOpen}
          onClose={handleClose}
          message="Oops! Something went wrong."
          key="snackFail"
          severity="error"
        />
      </Card>
    </form>
  );
};
