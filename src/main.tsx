import React from 'react';
import ReactDOM from 'react-dom/client';
import { Login } from './components/pages/login/login';
import { GlobalStyle, theme } from './global-styles';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes,Route} from "react-router-dom"
import { CreateUser } from "./components/pages/create-user/create-user";
import { Home } from './components/pages/home/home';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/register" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
