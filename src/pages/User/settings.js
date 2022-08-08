
import { Box, Container, Typography } from '@mui/material';

import { SettingsNotifications } from '../../components/settings/settings-notifications';
import { SettingsPassword } from '../../components/settings/settings-password';

const Settings = () => (
  (<>

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
          Settings
        </Typography>
        <SettingsNotifications />
        <Box sx={{ pt: 3 }}>
          <SettingsPassword />
        </Box>
      </Container>
    </Box>
  </>)
);

Settings.getLayout = (page) => (
{page}
);

export default Settings;
