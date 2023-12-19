import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './features/Homepage/Homepage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './shared/Header/Header';
import Footer from './shared/Footer/Footer';
import { darkTheme } from 'theme';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#700505',
//       lighter: #d4b4b4,
//       darker: #530303,
//     },
//     secondary: {
//       main: '#e08106',
//       lighter: #f6d9b4,
//       darker: #d36403,
//     }
//   },
// });

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
