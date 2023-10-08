import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom";

export const Register = () => {
    const [userName, setUserName] =useState<string>("");
    const [phoneNum, setPhoneNum] = useState<string>();
    const [userEmail, setUserEmail] =useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");
    const [stationName, setStationName] =useState<string>("");
    const [stationRegNum, setStationRegNum] =useState<string>();
    const [district, setDistrict] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [stationEmail, setStationEmail] = useState<string>("");
    const [statioinPassword, setStationPassword] =useState<string>("");
    const [userRegister, setUserRegister] = useState(true);

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
            <div>
                <div className="flex flex-col gap-3 text-center my-2">
                    <p>Choose a way u like to Register</p>
                    <div className="flex flex-row justify-around w-full">
                        <button onClick={() => setUserRegister(true)} className={`text-${userRegister ? 'primary' : 'new-gray'}`}>Register as a User</button>
                        <button onClick={() => setUserRegister(false)} className={`text-${userRegister ? 'new-gray' : 'primary'}`}>Register as a Station</button>
                    </div>
                </div>
                {userRegister ? (
                    <div className="flex flex-col gap-3 items-center py-5 px-7 border border-gray-300 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
                        <h1>Register as a User</h1>
                        <input 
                            type="text"
                            placeholder="Name"
                            value={userName}
                            className="inputs"
                            onChange={e=> {
                                setUserName(e.target.value)
                            }}
                        />
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
                            type="number"
                            placeholder="Phone number"
                            value={phoneNum}
                            className="inputs"
                            onChange={e=> {
                                setPhoneNum(e.target.value)
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
                        <button onClick={handleUserLogin} className="sub-button">Register</button>
                        <div className="reg">
                            <Link className="text-blue-500 font-bold no-underline hover:underline" to="/login">Login</Link> 
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-3 items-center py-5 px-7 border border-gray-300 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
                        <h1>Register as a Station</h1>
                        <input 
                            type="text"
                            placeholder="Station Name"
                            value={stationName}
                            className="inputs"
                            onChange={e=> {
                                setStationName(e.target.value)
                            }}
                        />
                        <input 
                            type="text"
                            placeholder="Station Register Number"
                            value={stationRegNum}
                            className="inputs"
                            onChange={e=> {
                                setStationRegNum(e.target.value)
                            }}
                        />
                        <input 
                            type="text"
                            placeholder="District"
                            value={district}
                            className="inputs"
                            onChange={e=> {
                                setDistrict(e.target.value)
                            }}
                        />
                        <input 
                            type="text"
                            placeholder="City"
                            value={city}
                            className="inputs"
                            onChange={e=> {
                                setCity(e.target.value)
                            }}
                        />
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
                        <button onClick={handleStationLogin} className="sub-button">Register</button>
                        <div className="reg">
                            <Link className="text-blue-500 font-bold no-underline hover:underline" to="/login">Login</Link> 
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}