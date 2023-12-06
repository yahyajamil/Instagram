import React from "react";
import i18next from "i18next";

const Language = [
    {
        code: "en",
        language: "English",
        country_code: "us"
    },
    {
        code: "es",
        language: "Español (España)",
        country_code: "es"
    },
]

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-links">
                <a href="#" className="footer-link-items">Meta</a>
                <a href="#" className="footer-link-items">About</a>
                <a href="#" className="footer-link-items">blogs</a>
                <a href="#" className="footer-link-items">Jobs</a>
                <a href="#" className="footer-link-items">Helps</a>
                <a href="#" className="footer-link-items">API</a>
                <a href="#" className="footer-link-items">Privacy</a>
                <a href="#" className="footer-link-items">Terms</a>
                <a href="#" className="footer-link-items">Top Accounts</a>
                <a href="#" className="footer-link-items">Locations</a>
                <a href="#" className="footer-link-items">Instagram Lite</a>
                <a href="#" className="footer-link-items">Contact Uploading & Non-Users</a>
                <a href="#" className="footer-link-items">Digital Collectibles Privacy Notice</a>
            </div>
            <div className="copyright">
                <select
                    onChange={(e) => i18next.changeLanguage(e.target.value)}
                    defaultValue={i18next.language} className="language"
                >
                    {Language.map((lang) => (
                        <option value={lang.code} key={lang.code}>
                            {lang.language}
                        </option>
                    ))}
                </select>
                <span className="">© 2023 Instagram from Meta</span>
            </div>
        </div>
    )
}