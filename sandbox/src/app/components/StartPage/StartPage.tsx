import React from 'react';
import { Link } from 'react-router-dom';

const StartPage: React.FC = () => {
    return (
        <div className='sandbox-start-page'>
            <Link to='/h5p' className='start-page-nav'>HP5 test</Link>
            <Link to='/' className='start-page-nav'>test1</Link>
        </div>
    );
}

export default StartPage;
