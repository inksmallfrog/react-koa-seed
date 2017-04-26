/*
* @Author: inksmallfrog
* @Date:   2017-04-26 16:03:43
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-26 16:59:48
*/

'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    render(){
        return <div className="root">Hello world from react</div>
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});