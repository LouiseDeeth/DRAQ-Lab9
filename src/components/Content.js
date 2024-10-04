import React from 'react';

const Content = () => {
    return (
        //Added h1 header and h2 present time
        <div>
            <h1>Hello World</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

export default Content;