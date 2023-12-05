import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './features/Homepage/Homepage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './shared/Header/Header';
import Footer from './shared/Footer/Footer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <div className="app">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header></Header>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
          </Routes>
        </Router>
        <Footer></Footer>
      </ThemeProvider>
    </div>
  );
}
