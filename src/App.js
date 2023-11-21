import React from 'react';
import './App.css';
import CustomerDetailsform from './components/CustomerDetailsform';
import SubmitButton from './components/submitbutton';
import Header from './components/header';


function App() {
    return (
        <div className='App'>
            <Header />
            <CustomerDetailsform />
            <SubmitButton />


        </div>
    );
}

export default App;
