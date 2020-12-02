import React from 'react';
import Terminal from './components/app/Terminal'
import Transpiler from './transpiler';

const App = () => {
    const transpiler = new Transpiler();
    return (
        <div className="App" style={{ backgroundColor: '#1e1e1e' }}>
            <Terminal transpiler={transpiler} />
        </div>
    );
};

export default App;
