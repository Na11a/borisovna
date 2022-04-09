import React, { Suspense } from 'react';
import './App.css';
import './i18n'
import { Route, Routes } from 'react-router-dom';
import { Main } from './components';

function App() {
    return (
        <Suspense fallback='Loading..'>
            <Routes>
                <Route path='/' element={<Main />} />
            </Routes>
        </Suspense>
    );
}

export default App;
