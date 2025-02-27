import React from 'react';
import '../styles.css';
import catlogo from '../assets/Catalog_art_02.png';


const Home = () => {
    return (
        <div className='home'>
            <br></br>
            <h1>Centralized aggregation & observability of your Key Performance Indicators made easy.</h1>
            <h3>Send custom metrics in structured logs from your Lambda instances directly to AWS Cloudwatch.</h3>
            <h1>Simple. Secure. Efficient.</h1>
            <h3>Cat-A-Log helps you leverage CloudWatch Embedded Metric Format (EMF) to automatically populate your businesses's KPIs from your logs to Cloudwatch Metrics.</h3>
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