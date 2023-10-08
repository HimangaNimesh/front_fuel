import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
    const [userEmail, setUserEmail] =useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");
    const [stationEmail, setStationEmail] = useState<string>("");
    const [statioinPassword, setStationPassword] =useState<string>("");
    const [userLogin, setUserLogin] = useState<boolean>(true);

    const handleUserLogin = async(e: any) => {
        e.preventDefault();
        try {
            const res = await axios.post("auth/user/signin", {
                email: userEmail, 
                password: userPassword
            })
            console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    const handleStationLogin = async(e : any) => {
        e.preventDefault();
        try {
            const res = await axios.post("auth/station/signin", {
                email: stationEmail, 
                password: statioinPassword
            })
            console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="flex flex-col gap-5 h-screen items-center justify-center">
            <div className="">
                <div className="flex flex-col gap-3 text-center my-2">
                    <p>Choose a way u like to Login</p>
                    <div className="flex flex-row justify-around w-full">
                        <button onClick={() => setUserLogin(true)} className={`text-${userLogin ? 'primary' : 'new-gray'}`}>Login as a User</button>
                        <button onClick={() => setUserLogin(false)} className={`text-${userLogin ? 'new-gray' : 'primary'}`}>Login as a Station</button>
                    </div>
                </div>
                {userLogin ? (
                    <div className="flex flex-col gap-3 items-center py-5 px-7 border border-gray-300 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
                        <h1>Login as a User</h1>
                        <input 
                            type="email"
                            placeholder="Email"
                            value={userEmail}
                            className="inputs"
                            onChange={e=> {
                                setUserEmail(e.target.value)
                            }}
                        />
                        <input 
                            type="password"
                            placeholder="password"
                            value={userPassword}
                            className="inputs"
                            onChange={e=> {
                                setUserPassword(e.target.value)
                            }}
                        />
                        <button onClick={handleUserLogin} className="sub-button">Login</button>
                        <div className="reg">
                            <Link className="text-blue-500 font-bold no-underline hover:underline" to="/register">Register</Link> 
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-3 items-center py-5 px-7 border border-gray-300 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
                        <h1 className="text-primary">Login as a Station</h1>
                        <input 
                            type="text"
                            placeholder="Email"
                            value={stationEmail}
                            className="inputs"
                            onChange={e=> {
                                setStationEmail(e.target.value)
                            }}
                        />
                        <input 
                            type="password"
                            placeholder="password"
                            value={statioinPassword}
                            className="inputs"
                            onChange={e=> {
                                setStationPassword(e.target.value)
                            }}
                        />
                        <button onClick={handleStationLogin} className="sub-button">Login</button>
                        <div className="reg">
                            <Link className="text-blue-500 font-bold no-underline hover:underline" to="/register">Register</Link> 
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}