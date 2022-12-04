import React from "react"; 
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";

export function App() {


        return (
            <div>
                <Routes>
                    <Route path="/" element={<Welcome name='Federica'/>}/>
                    <Route path="/Counter" element={<Counter/>}/>
                </Routes>
            </div>
        )
    }
