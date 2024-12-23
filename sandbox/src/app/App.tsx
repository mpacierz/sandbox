import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<div>Strona główna</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
