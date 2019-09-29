import React from 'react';
import "./Team.css";

export default function Team() {
    return (
        <div className='team_wrapper'>
            <h2>The Team</h2>
            <img className="author" src={'images/team/Kairat.jpg'} alt="Kairat Abylkasymov" />
            <div><b>Kairat Abylkasymov</b></div>
            <div className="bio"><p>Originally from Kyrgyzstan, Kairat now lives in New York. Motivated by a desire to become a high-level programmer, Kairat has been teaching himself programming skills before coming to Lambda School, starting with Ruby. He is eager to continue his education while working after graduation.</p></div> 
            <br />
            <img className="author" src={'images/team/Troy.jpg'} alt="Troy Bradley" />
            <div><b>Troy Bradley</b></div>
            <div className="bio"><p>Troy hails from Perry, Iowa, where he was worked at a local Wireless Internet Service Provider before finding out about Lambda. He wants to program Smart Contracts once he graduates from Lambda. He's looking forward to the release of Ready Player One later this year.</p></div>
            <br />
            <img className="author" src={'images/team/Brandon.jpg'} alt="Brandon Fizer" />
            <div><b>Brandon Fizer</b></div>
            <div className="bio"><p>Brandon lives in Fayetteville, North Carolina. As a Professional Tattoo Artist, Brandon has a keen eye for design. Once he's graduated Lambda School, he intends to utilize his skills as a Full-Stack Developer to build new technology that could potentially benefit the world.</p></div>
            <br />
            <img className="author" src={'images/team/Lorin.jpg'} alt="Lorin Fields" />
            <div><b>Lorin Fields</b></div>
            <div className="bio"><p>Lorin was raised in Portland, Oregon, but now resides in Los Angeles. Prior to joining Lambda School, Lorin operated several online businesses that had interests in Blockchain and Cryptocurrencies. He decided to attend Lambda school in order to pursue a formal Computer Science education. He looks forward to making waves in the Blockchain/Crypto space when he completes the Lambda course.</p></div>
            <br />
            <img className="author" src={'images/team/Abby.jpg'} alt="Abby Tiffany"/>
            <div><b>Abby Tiffany</b></div>
            <div className="bio"><p>Abby grew up in Fairfax, Virginia and currently lives in Seattle, Washington. Before being accepted to Lambda, Abby worked in banking. She wants to work with Blockchain technology after graduating from the program in May 2018. Abby, who majored in American Sign Language in undergrad, hopes to write kick-ass back-end code for many years.</p></div>

        </div>
    );
}