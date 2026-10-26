import React from 'react';
import {useStore} from '../store/useStore';
export const Home: React.FC = () => {
    const {count,increase,decrease} = useStore();
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the Home Page</p>
            <p>Count: {count}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    );
};