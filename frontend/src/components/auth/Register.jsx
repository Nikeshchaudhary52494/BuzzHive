import { useEffect, useState } from "react";
import { registerUser } from "../../slices/userSlice";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, loading } = useSelector((state) => state.user);
    const [user, setUser] = useState({
        name: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    const handelInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(user)).then(() => {
            navigate("/");
        })
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/")
        }
    }, [isAuthenticated, navigate])

    return (
        loading ?
            <Loader />
            :
            <div className="h-screen w-screen flex justify-center gap-2 flex-col items-center">
                <h1 className="text-3xl font-bold"><img className="w-20" src="/logo.png" />Welcome to BuzzHive</h1>
                <form onSubmit={handelSubmit} className="flex flex-col gap-2 p-10 rounded bg-white bg-opacity-10 ">
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            name="name"
                            required
                            onChange={handelInputChange}
                            value={user.name}
                            className="grow"
                            placeholder="Name"
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            name="username"
                            required
                            onChange={handelInputChange}
                            value={user.username}
                            className="grow"
                            placeholder="Username"
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="password"
                            name="password"
                            required
                            onChange={handelInputChange}
                            value={user.password}
                            className="grow"
                            placeholder="Password"
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="password"
                            name="confirmPassword"
                            required
                            onChange={handelInputChange}
                            value={user.confirmPassword}
                            className="grow"
                            placeholder="Confirm Password"
                        />
                    </label>
                    <p className="text-xs text-right" >Already a user?<Link to="/login"><span className="underline">Login</span></Link></p>
                    <input type="submit" value="Submit" className="btn" />
                </form>
            </div >
    );
}

export default Register;
