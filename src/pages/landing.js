import "./landing.css";
import ResponsiveAppBar from "../components/navbar/navbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import Link from "@mui/material/Link";
import logobnb from "../assets/botngbayan2.png";

import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export function Landing() {
  let handleLogin = () => {
    let oUrl =
      "https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=" +
      process.env.REACT_APP_CLIENT_ID +
      "&redirect_uri=" + process.env.REACT_APP_REDIRECT_URL +
      "&scope=user%3Aread%3Aemail+user%3Aread%3Afollows" +
      "&state=" +
      process.env.REACT_APP_STATE;

    window.location.href = oUrl;
  };

  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleClickOpen = (title, content) => {
    setTitle(title);
    setContent(content);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <header>
        <Grid container spacing={2} sx={{ padding: 2 }}>
          <Grid item xs={12} md={6}>
            <center>
              <img src={logobnb} className="App-logo" alt="logo" />
            </center>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2">Well hello there!</Typography>
            <Typography variant="h3">I am bot_ng_bayan</Typography>
            <Typography variant="h5" sx={{ paddingTop: 5 }}>
              The open-source shoutout bot you might have seen from one of your
              favorite streams.
            </Typography>

            <Button
              sx={{ marginTop: 5 }}
              variant="contained"
              onClick={() => {
                handleLogin();
                // navigate("./account");
              }}
            >
              Login from Twitch
            </Button>
          </Grid>
        </Grid>
      </header>
      <section>
        
        <Grid container spacing={2} sx={{ paddingLeft: 2, paddingRight: 2 }}>
          <Grid item xs={12} md={12}>
          <h1>How to join bot_ng_bayan?</h1>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ minWidth: 275, minHeight: 150 }}>
              <CardContent>
                <Typography variant="h5">
                  Follow{" "}
                  <Link href="https://www.twitch.tv/bot_ng_bayan">
                    bot_ng_bayan
                  </Link>{" "}
                  on Twitch
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"
                onClick={() => {
                  handleClickOpen(
                    "Follow bot_ng_bayan",
                    "Click bot_ng_bayan twitch link above and hit the Follow button. Wait a few minutes, bot_ng_bayan should join your channel's chat."
                  );
                }}
                >Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ minWidth: 275, minHeight: 150 }}>
              <CardContent>
                <Typography variant="h5">
                  Go to  <strong>bot_ng_bayan</strong> chat and type <strong>!join</strong> 
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => {
                    handleClickOpen(
                      "Mod bot_ng_bayan",
                      "If you have shoutout clips showing on your overlay like twitchguru or streamer.help, you need to set bot_ng_bayan as a mod. You can do this by typing /mod bot_ng_bayan in your chat"
                    );
                  }}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ minWidth: 275, minHeight: 150 }}>
              <CardContent>
                <Typography variant="h5">
                  Add <strong>bot_ng_bayan</strong> as a mod to your channel
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => {
                    handleClickOpen(
                      "Mod bot_ng_bayan",
                      "If you have shoutout clips showing on your overlay like twitchguru or streamer.help, you need to set bot_ng_bayan as a mod. You can do this by typing /mod bot_ng_bayan in your chat"
                    );
                  }}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>          
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {content}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              
              <Button onClick={handleClose} autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </section>
      <br></br>
      <section>
        <Grid container spacing={2} sx={{ paddingLeft: 2, paddingRight: 2 }}>   
        <Grid item xs={12} md={12}>
          <h1>How to support bot_ng_bayan?</h1>
          </Grid>       
          <Grid item xs={12} md={6}>
            <Card sx={{ minWidth: 275, minHeight: 150 }}>
              <CardContent>
                <Typography variant="h5">
                  Join our{" "}
                  <a href="https://discord.com/invite/NJNAGqcCDB">
                    discord channel
                  </a>{" "}
                  for feedback{" "}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"
                onClick={() => {
                  handleClickOpen(
                    "Join discord",
                    "Join speeeedtv's discord and checkout bot-ng-bayan-release notes to keep up to date with the bot changes. You can also leave your feedback on bot-ng-bayan-feedback channel"
                  );
                }}
                >Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ minWidth: 275, minHeight: 150 }}>
              <CardContent>
                <Typography variant="h5">
                  Follow <a href="https://www.twitch.tv/speeeedtv">speeeedtv</a>{" "}
                  to keep up to date with the bot{" "}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"
                onClick={() => {
                  handleClickOpen(
                    "Follow speeeedtv",
                    "Click speeeedtv's twich link above and hit Follow. See the bot's progress live on his weekend streams."
                  );
                }}>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ minWidth: 275, minHeight: 150 }}>
              <CardContent>
                <Typography variant="h5">
                  Support us through <a href="https://ko-fi.com/speeeedtv">Ko-Fi</a>{" "}                  
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"
                onClick={() => {
                  handleClickOpen(
                    "Support bot_ng_bayan",
                    "Every bit of support will go into the bot's server hosting and improvements."
                  );
                }}>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {content}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              
              <Button onClick={handleClose} autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </section>
    </div>
  );
}
