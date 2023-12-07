import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Space, ConfigProvider } from "antd";
import { GoogleOAuthProvider } from '@react-oauth/google'
import store, { persistor } from './toolkit/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: '#00b96b',
            borderRadius: 2,

            // Alias Token
            colorBgContainer: '#f6ffed',
          },
        }}
      >
        <Space>
          <GoogleOAuthProvider clientId="452505717276-ush1ctafha733ssul0pp47sbgtc16npo.apps.googleusercontent.com">
            <App />
          </GoogleOAuthProvider>
        </Space>
      </ConfigProvider>
    </PersistGate>
  </Provider>

  ,
)
