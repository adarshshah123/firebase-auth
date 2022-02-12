import app from 'flarum/admin/app';

import AuthSettingsPage from './components/AuthSettingsPage';

app.initializers.add('adarsh/firebase', () => {
  app.extensionData.for('adarsh-firebase').registerPage(AuthSettingsPage);
});
