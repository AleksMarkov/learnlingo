// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import App from 'components/App';
// import store from './redux/store';
import './index.css';
import GlobalStyles from 'GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter basename="/learnlingo">
      <GlobalStyles />
      <App />
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);
