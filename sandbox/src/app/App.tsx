import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './components/StartPage/StartPage';

const App = () => {
    return (
        <div className='sandbox'>
            <Router>
                <Routes>
                    <Route path="/" element={<StartPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
