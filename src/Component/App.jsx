import React, { Component } from "react";
import Loader from "./Loader";
import LogInForm from "./LogIn";
import SignUpForm from "./SignUp";


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isLoggedIn: true,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.pageLoad();
        }, 3000);
    }

    pageLoad = () => {
        this.setState({ isLoading: false });
    };

    logInHandler = () => {
        this.setState({ isLoggedIn: false })
    }

    signHandler = () => {
        this.setState({ isLoggedIn: true })
    }

    render() {
        return (
            <>
                {this.state.isLoading ? (
                    <Loader />
                ) : (
                    this.state.isLoggedIn ? (
                        <LogInForm clickHandler={this.logInHandler} />
                    ) : (
                        <SignUpForm clickHandler={this.signHandler} />
                    )
                )}
            </>
        )
    }
}
