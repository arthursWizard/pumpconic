import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './features/Homepage/Homepage';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './shared/Header/Header';
import Footer from './shared/Footer/Footer';
import { darkTheme } from 'theme';
import Program from 'features/Program/Program';
import Training from 'features/Training/Training';

export default function App() {
  return (
    <div className="app">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header></Header>
        <div className="body">
          <Router>
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/program/:programId" element={<Program />}></Route>
              <Route path="/training/:trainingId" element={<Training />}></Route>
            </Routes>
          </Router>
        </div>
        <Footer></Footer>
      </ThemeProvider>
    </div>
  );
}
