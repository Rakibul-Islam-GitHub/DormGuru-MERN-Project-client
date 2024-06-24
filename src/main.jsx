
import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from "./App";
import { store } from "./store/store";
import PersistProvider from "./store/providers/persist-provider";
import './index.css'
import AuthProvider from "./ContextProvider/AuthProvider";



const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
      <PersistProvider>
      <AuthProvider>
      <App />
     </AuthProvider>
      </PersistProvider>
    </Provider>
);


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   </React.StrictMode>,
// )
