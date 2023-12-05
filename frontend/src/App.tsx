import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './features/Homepage/Homepage';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
