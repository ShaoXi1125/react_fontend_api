import React from 'react';
import {useLocalStorage} from '../hooks/useLocalStorage';

export const Settings: React.FC = ()=>{
    const [nickname,setNickName] = useLocalStorage<string>('app_nickname','Chen Shao Xi');

    return(
        <div>
            <h1>Settings Page</h1>
            <label>User Nickname: </label>
            <br/>
            <input type="text" value={nickname} onChange={(e)=>setNickName(e.target.value)} />
        </div>
    );
}