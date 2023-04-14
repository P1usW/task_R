import React, {useEffect, useState} from 'react';
import '../../style/App.scss';

import NavBar from "../NavBar/NavBar";
import {Route, Routes, useLocation} from "react-router-dom";
import Calculator from "../Calculator/Calculator";
import Catalog from "../Catalog/Catalog";
import NotFoundPage from "../NotFound/NotFoundPage";


function App() {
    const [search, setSearch] = useState<string>('');

    const location = useLocation();

    useEffect(() => {
        setSearch('');
    }, [location]);

    return (
        <>
            <NavBar search={search} setSearch={setSearch}/>
            <div className="App">
                <Routes>
                    <Route element={<Catalog search={search}/>}
                           path='/'/>
                    <Route element={<Calculator/>}
                           path='calc'/>
                    <Route element={<NotFoundPage/>}
                           path='*'/>
                </Routes>
            </div>
        </>

    );
}

export default App;
