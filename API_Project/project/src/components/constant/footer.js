import React from 'react';

const bottomBar = () => {
    return(
        <div>
            <footer className="footer--bottom">
                <div className="footer--card">
                    <h2>Dominick Duliepre</h2>
                    <p className="footer__info">I am Dominick Duliepre, a designer and a developer. This website was created for consumers to find their preferred gaming console at any time. The three different companies - Sony, Microsoft, Nintendo - offer various types of efficient gaming consoles for gamers worldwide. Found below are icons that link to the consoles' original websites (for more information).</p>
                    <p className="footer__img">
                        <a href="https://www.playstation.com/en-us/"><img src="https://vignette.wikia.nocookie.net/gallowmere/images/9/9a/PlayStation_1_Logo.png/revision/latest?cb=20120804223608" alt="PS Logo" className="footer__playstation"/></a>
                        <a href="https://www.xbox.com/en-US/"><img src="https://purepng.com/public/uploads/large/purepng.com-xbox-logoxboxmicrosoft-xboxxbox-game-playerxbox-game-pad-1701528437267trqqk.png" alt="Xbox Logo" className="footer__xbox"/></a>
                        <a href="https://www.nintendo.com/"><img src="https://vignette.wikia.nocookie.net/splatoon/images/2/26/Nintendo-Logo-transparent.png/revision/latest?cb=20150329230340" alt="Nintendo Logo" className="footer__nintendo"/></a>
                    </p>
                    <form>
                        <input type="text" name="Search" className="footer__search--text"/>
                        <input type="submit" value="Search" className="footer__search--button"/>
                    </form>
                </div>
    
                <div className="footer--card">
                    <h2>Available Systems</h2>
                    <p>PlayStation</p>
                    <p>Xbox</p>
                    <p>Nintendo</p>
                </div>

                <div className="footer--card">
                    <h2>Running Out</h2>
                    <p>PlayStation One</p>
                    <p>PlayStation 2</p>
                    <p>Xbox</p>
                    <p>Nintendo 64</p>
                    <p>GameCube</p>
                </div>

                <div className="footer--card">
                    <h2>Hot on the Market</h2>
                    <p>PS4</p>
                    <p>Xbox One</p>
                    <p>Nintendo Switch</p>
                    <p>Wii U</p>
                </div>
            </footer>
        </div>
    );
}

export default bottomBar;