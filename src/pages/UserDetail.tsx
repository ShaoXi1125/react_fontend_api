import React, {useState, useEffect} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';

interface UserParams{
    id:string;
    [key:string]:string | undefined;
}

interface ApiUser{
    name:string;
    email:string;
    phone:string;
}

export const UserDetail: React.FC = () => {
    const {id} = useParams<UserParams>();
    const navigate = useNavigate();
    const [user,setUser] = useState<ApiUser | null>(null);
    const [loading,setLoading] = useState<boolean>(true);

    useEffect(() =>{
        axios.get<ApiUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>{
            setUser(res.data);
            setLoading(false);
        })
        .catch((err)=>{
            console.error(err);
            setLoading(false);
        });
    },[id]);

    return(
        <div>
            <h2>User Detail Page</h2>
            {loading ? (
                <p>Loading...</p>
            ):user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                </div>
            ) :(
                <p>User not found</p>
            )}

            <button onClick={()=>navigate('/')}>
                Back to Home
            </button>
        </div>
    );
}

6938453034