import ReactDOM from 'react-dom/client';
import App from './App.js'
import './index.css';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-f7j2j684u6jb.frontegg.com',
  clientId: '63b83413-5f89-4b3a-8a2e-1846d40d8562', 
  appId: '4053ce69-68cf-4d84-9635-f3e5e530a25e'
};

const authOptions = {
 // keepSessionAlive: true // Uncomment this in order to maintain the session alive
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FronteggProvider 
    contextOptions={contextOptions} 
    hostedLoginBox={true}
    authOptions={authOptions}>
        <App />
    </FronteggProvider>,
    document.getElementById('root')
);