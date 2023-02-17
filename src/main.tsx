import React from 'react';
import ReactDOM from 'react-dom/client';
import { Login } from './pages/login/login';
import { GlobalStyle, theme } from './theme/global-styles';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes,Route} from "react-router-dom"
import { CreateUser } from "./pages/create-user/create-user";
import { CreateGenre } from "./pages/create-genre/create-genre";
import { Home } from './pages/home/home';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/register" element={<CreateUser />} />
          <Route path="/creategenre" element={<CreateGenre />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
