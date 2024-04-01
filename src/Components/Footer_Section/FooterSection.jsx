import CapitalText from "../Texts/CapitalText";
import Phone_call from "../../Icons/PhoneCall";
import Email_icon from "../../Icons/Email";
import Location from "../../Icons/Location";


function CreativeLogo (){
    return(
        <div className="logo_">
            <CapitalText  className="creative_logo" text="CreativeLogo" />
            <CapitalText  className="welcome_note" text="Welcome to our consultancy agency.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
            <hr className="creative_hr"></hr>
            <div className="phone">
                <Phone_call/>
                <p>+92 666 888 0000</p>
            </div>
            <div className="email">
                <Email_icon/>
                <p>needhelp@company.com</p>
            </div>
            <div className="location">
                <Location/>
                <p>66, Broklyn Street New York, USA</p>
            </div>
        </div>
    )
};

function Explore (){
    return(
        <div className="explore_">
            <h6>EXPLORE</h6>
            <div className="explore_footer">
                <ul className="explore_list">
                    <li><a href="">About</a></li>
                    <li><a href="">Meet our Team</a></li>
                    <li><a href="">Case Studies</a></li>
                    <li><a href="">Latest News</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <ul className="explore_list">
                    <li><a href="">Support</a></li>
                    <li><a href="">Term of use</a></li>
                    <li><a href="">Privacy & Policy</a></li>
                    <li><a href="">Help</a></li>
                </ul>
            </div>
        </div>
    )
};


function Newsletter(){
    return(
        <div className="newsletter">
            <h6>NEWSLETTER</h6>
            <div className="form_">
                <p>Subscribe for latest articles and resources</p>
                <form >
                    <label>
                        <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        />
                    </label>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    )
};

import Social_Icons from "../../Icons/Socials/Social_Icons";

export default function Footer_Section(){
    return(
        <>
        <div className="footer-section">
            <div className="footer-section2">
                <CreativeLogo/>
                <Explore/>
                <Newsletter/>
            </div>
            <hr></hr>
            <div className="footer-section3">
                    <footer>
                        <p>&copy; 2021 by Company. All rights reserved.</p>
                    </footer>
                    <Social_Icons></Social_Icons>
            </div>
        </div>
        </>
    )
};