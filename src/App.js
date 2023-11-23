import React from 'react';
import './App.css';
import CustomerDetailsform from './components/CustomerDetailsform';
import SubmitButton from './components/submitbutton';
import Header from './components/header';
import createTable from './components/table';



function App() {
    return (
        <div className='App'>
            <Header />
            <CustomerDetailsform />
            <SubmitButton />
            <createTable />




        </div>
    );
}

export default App;
