import React, { useState } from "react";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import Download from "./DownloadBoxes";
import MobileScreen from "./Mobile";

export default function LogInForm(props) {

    const { t } = useTranslation();
    document.title = t('logTitle');

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const togglePasswordVisibility = (e) => {
        setShowPassword(!showPassword);
    }

    const isUsernameActive = username.length > 0;
    const isPasswordActive = password.length > 0;
    const isButtonActive = username.length > 0 && password.length >= 8;

    return (
        <>
            <div className="container">
                <MobileScreen />
                <div className="main">
                    <div className="content">
                        <Logo />
                        <div className="form-content">
                            <form action="" className="form">
                                <div>
                                    <label htmlFor="username" className="in-label">
                                        <span
                                            className={`in-text ${isUsernameActive ? 'active' : ''}`} onClick={() => document.getElementById('username').focus()}>
                                            {t('logEmail')}
                                        </span>
                                        <input
                                            type="text"
                                            className="in-input username"
                                            id="username"
                                            value={username}
                                            onChange={handleUsernameChange}
                                            autoComplete="off"
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
                            <button className={`loginBtn ${isButtonActive ? 'btnActive' : ''}`}>{t('logButton')}</button>

                            <div className="seperator">
                                <div className="line"></div>
                                <div className="OR">OR</div>
                                <div className="line"></div>
                            </div>

                            <div className="facebook">
                                <a href="#">
                                    <img src="image/Facebook_logo.png" width="16" height="16" />
                                    <span>{t('facebook')}</span>
                                </a>
                            </div>

                            <div className="forget">
                                <a href="#">
                                    <span>{t('forgetPass')}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="signup">
                        <p>{t('SignMessage')} <a href="#"><span onClick={props.clickHandler}>{t('signButton')}</span></a></p>
                    </div>
                    <Download />
                </div>
            </div>
            <Footer />
        </>
    )
}