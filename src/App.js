import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoApp} from "./TodoApp";
import {Login} from "./Components/Login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class App extends Component {

    constructor(props) {
        super(props);
        localStorage.setItem('user', "qwe");
        localStorage.setItem('pass', "qwe");
    }

    render() {
        const LoginView = () => (
            <Login/>
        );

        const TodoView = () => (
            <TodoApp/>
        );

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                        <li><Link to="/">Login</Link></li>
                         <li><Link to="/todo">Todo</Link></li>
                    </ul>

                    <div>
                        <Route exact path="/" component={LoginView}/>
                        {localStorage.getItem("isLoggedIn") && <Route path="/todo" component={TodoView}/>}
                    </div>
                </div>
            </Router>
        );
    }

}

export default App;
