import React, { useState } from "react";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import Download from "./DownloadBoxes";
import Policy from "./Policy";

export default function SignUpForm(props) {
    const { t } = useTranslation();
    document.title = t('signTitle');

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const togglePasswordVisibility = (e) => {
        setShowPassword(!showPassword);
    }

    const isEmailActive = email.length > 0;
    const isNameActive = name.length > 0;
    const isUsernameActive = username.length > 0;
    const isPasswordActive = password.length > 0;
    const isButtonActive = username.length > 0 && password.length >= 8 && email.length >= 10 && name.length > 0;

    return (
        <>
            <div className="main">
                <div className="content">
                    <Logo />
                    <div className="text">
                        <span>
                            {t('signText')}
                        </span>
                    </div>
                    <div className="form-content">
                        <form action="" className="form" autoComplete="off">
                            <div>
                                <label htmlFor="email" className="in-label">
                                    <span
                                        className={`in-text ${isEmailActive ? 'active' : ''}`} onClick={() => document.getElementById('email').focus()}>
                                        {t('signEmail')}
                                    </span>
                                    <input
                                        type="email"
                                        className="in-input email"
                                        id="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="name" className="in-label">
                                    <span
                                        className={`in-text ${isNameActive ? 'active' : ''}`} onClick={() => document.getElementById('name').focus()}>
                                        {t('Name')}
                                    </span>
                                    <input
                                        type="text"
                                        className="in-input name"
                                        id="name"
                                        value={name}
                                        onChange={handleNameChange}
                                    />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="username" className="in-label">
                                    <span
                                        className={`in-text ${isUsernameActive ? 'active' : ''}`} onClick={() => document.getElementById('username').focus()}>
                                        {t('username')}
                                    </span>
                                    <input
                                        type="text"
                                        className="in-input username"
                                        id="text"
                                        value={username}
                                        onChange={handleUsernameChange}
                                    />
                                </label>
                            </div>
                            <div className="passInput">
                                <label htmlFor="password" className="in-label">
                                    <span className={`in-text ${isPasswordActive ? 'active' : ''}`} onClick={() => document.getElementById('password').focus()}>
                                        {t('password')}
                                    </span>
                                    <span className={`showpass ${isPasswordActive ? 'show' : 'hide'}`} onClick={togglePasswordVisibility}>
                                        {showPassword ? t('hideBtn') : t('showBtn')}
                                    </span>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className="in-input password"
                                        id="password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="btn-content">
                        <Policy />
                        <button className={`signUpBtn ${isButtonActive ? 'btnActive' : ''}`}>{t('signButton')}</button>
                    </div>
                </div>
                <div className="signup">
                    <p>{t('logMessage')} <a href="#"><span onClick={props.clickHandler}>{t('logButton')}</span></a></p>
                </div>
                <Download />
            </div>
            <Footer />
        </>
    )
}