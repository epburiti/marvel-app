import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/GlobalStyle'
import store from './Store/index';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store.store}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
