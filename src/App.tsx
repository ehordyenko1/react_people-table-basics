import Navbar from './MyComponents/Navbar';
import HomePage from './pages/HomePage';
import { PeoplePage } from './pages/PeoplePage';
import PageNotFound from './pages/PageNotFound';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div data-cy="app">
      <Router>
        <Navbar />
        <main className="section">
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/people" element={<PeoplePage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </main>
      </Router>
    </div>
  );
};
