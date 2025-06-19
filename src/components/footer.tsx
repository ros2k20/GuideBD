import React from "react"
const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="top">
                <div className="column">
                    <h3>Tour Guide</h3>
                    <p>TRAVEL GUIDE is your trusted travel companion for exploring the most
                        captivating destinations across Bangladesh. Whether youre planning a
                        vibrant city escape to Dhaka, a serene retreat in the Sundarbans,
                        a cultural journey through Rajshahi, or a beach holiday in Cox’s Bazar,
                        we’ll guide you every step of the way. Discover the country’s most
                        iconic sights, local secrets, and essential travel tips to make your
                        trip smooth, safe, and unforgettable.</p>
                </div>
                <div className="column">
                    <h3>Guide</h3>
                    <ul>
                        <li>District</li>
                        <li>Airports</li>
                        <li>Bus</li>
                        <li>Museums</li>
                        <li>Train</li>
                        <li>Ferries</li>
                    </ul>
                </div>

                <div className="column">
                    <h3>Popular Destination</h3>
                    <ul>
                        <li>Dhaka – The Capital City</li>
                        <li>Cox’s Bazar – World’s Longest Sea Beach</li>
                        <li>Sundarbans – Home of the Royal Bengal Tiger</li>
                        <li>Sylhet – Land of Tea Gardens and Hills</li>
                        <li>Srimangal – The Tea Capital of Bangladesh</li>
                        <li>Chittagong – Gateway to the Hill Tracts</li>
                        <li>Bandarban – Hills and Tribal Culture</li>
                        <li>Rangamati – Lake of Tranquility</li>
                        <li>Rajshahi – City of Silk and Mangoes</li>
                    </ul>
                </div>
            </div>
            <div className="bottom">
                <p>Copyright © 2025 TOUR GUIDE. All rights reserved.</p>
                <div>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">FAQ</a>
                </div>
            </div>

        </footer>
    );
}
export default Footer;