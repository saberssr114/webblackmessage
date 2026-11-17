import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.blackmessage.app',
  appName: 'BlackMessage',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
