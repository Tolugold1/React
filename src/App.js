import React from 'react';
import Main from './components/MainComponents';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './Redux/ConfigureStore';

const store = ConfigureStore();

const App = () => {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;