/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
// import {
//   SafeAreaView,
//   View,
// } from 'react-native';
import WebView from 'react-native-webview';

const App = () => {
  return (
    <WebView
      source={{
        uri: 'https://www.naver.com',
      }}
      sharedCookiesEnabled={true}
    />
  );
};

export default App;
