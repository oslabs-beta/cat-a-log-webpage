import React from 'react';
import '../styles.css';
import catlogo from '../assets/Catalog_art_02.png';


const Home = () => {
    return (
        <div className='home'>
            <br></br>
            <h1>EMF log structuring made easy.</h1>
            <h3>Send structured logs and custom metrics from your EC2 or Lambda instance directly to AWS Cloudwatch.</h3>
            <h1>Simple. Secure. Efficient.</h1>
            <h3>This npm package helps you integrate AWS CloudWatch with AWS Embedded Metric Format (EMF) Logs and publish them to Cloudwatch using AWS Lambda Powertools. EMF formatting will allow for chosen metrics to be automatically visualized in Cloudwatch metrics for simpler log debugging..</h3>
            <pre className="code">
                npm install cat-a-logs
            </pre>
            <div className='art-container'>
                <img src={catlogo} alt="cat logo" className="art" />
            </div>
        </div>
    )
}

export default Home;