import React from "react"; 
import { Route, Routes, Link } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGithubUsers } from "./ShowGithubUsers";
import { UseGithubUsers } from "./UseGithubUsers"

export function App() {


        return (
            <div>
                <Routes>
                    <Route path="/" element={<Welcome name='Federica'/>}/>
                    <Route path="/Counter" element={<Counter/>}/>
                    
                    <Route path="/users" element={<UseGithubUsers />}>
                        <Route path=":username" element={<ShowGithubUsers />} />
                        <Route index element={<h2>Add a user and select it</h2>} /> 
                    </Route>
                    
                    
                    <Route path="*" element={
                        <div>
                            <p>Not Found</p>
                            <Link to="/">Go Home</Link>
                        </div>
                        }
          />
                </Routes>

                <div>
                    <Link to="/">Welcome</Link> | <Link to="/Counter">Count</Link> | <Link to="/users/">User</Link>
                </div>

            </div>
        )
    }
