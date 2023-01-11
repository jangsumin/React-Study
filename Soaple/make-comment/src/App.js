import React from 'react';
import useChangeAppState, { STATE_START, STATE_RUNNING, STATE_STOP } from './hooks/useChangeAppState';

function App() {
    const [state, next] = useChangeAppState();
    const msg = state === STATE_START ? '앱 시작' : state === STATE_RUNNING ? '앱 실행 중' : '앱 종료';
    return (
        <div>
            <p>{msg}</p>
            <button onClick={next}>next</button>
        </div>
    );
}

export default App;
