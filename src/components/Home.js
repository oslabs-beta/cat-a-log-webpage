import React from 'react';
import '../styles.css';
import catlogo from '../assets/Catalog_art.png';


const Home = () => {
    return (
        <div className='home'>
            <br></br>
            <h1>EMF log structuring made easy.</h1>
            <h3>Send structured logs and custom metrics from your EC2 or Lambda instance directly to AWS Cloudwatch.</h3>
            <h1>Simple. Secure. Efficient.</h1>
            <h3>Cat-A-Log handles the frustrating parts of EMF format logging so you don't have to.</h3>
            <pre className="code">
                npm install cat-a-log
            </pre>
            <div className='art-container'>
                <img src={catlogo} alt="cat logo" className="art" />
            </div>
        </div>
    )
}

export default Home;