import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import{Container} from "@mui/material"
import { App } from 'components/App';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Container component="div" maxWidth="xs">
            <App />
          </Container>
        </PersistGate>
      </Provider>
    </BrowserRouter>
   </React.StrictMode>
);
