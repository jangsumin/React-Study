import React, { useState, useDeferredValue, useMemo, useCallback } from 'react';
import { useEffect } from 'react';
import './App.css';

export default function App() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const deferredName = useDeferredValue(name);
    const result = useMemo(() => deferredName, [deferredName]);

    const onChange = useCallback((e) => {
        setName(e.target.value);
    }, []);

    useEffect(() => {
        const id = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);
        return () => {
            clearInterval(id);
        };
    }, []);

    console.log('render', deferredName);

    return (
        <div className='app'>
            <div>{count}</div>
            <div>검색창</div>
            <input className='input 'value={name} onChange={onChange} />
            {deferredName
                ? Array(10000)
                      .fill()
                      .map((v, i) => <div className='search-div' key={i}>{result}</div>)
                : null}
        </div>
    );

    // return (
    //     <div className='app'>
    //         {/* <div>{count}</div> */}
    //         <div>검색창</div>
    //         <input className='input' value={name} onChange={onChange} />
    //         {name
    //             ? Array(10000)
    //                   .fill()
    //                   .map((v, i) => (
    //                       <div className='search-div' key={i}>
    //                           {name}
    //                       </div>
    //                   ))
    //             : null}
    //     </div>
    // );
}
