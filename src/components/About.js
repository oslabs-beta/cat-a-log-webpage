import React from 'react';
import '../styles.css';
import Card from './Card.js';
import BrianImage from '../assets/Brian.PNG'; // Adjust paths as needed
import HarrisImage from '../assets/Harris.jpg';
import ClaraImage from '../assets/Clara.jpeg';
import CurranImage from '../assets/Curran.jpg';
import JacobImage from "../assets/Jacob.jpg";


const About = () => {
    return (
        <div className='about'>
            <br></br>
            <h1>What is Cat-A-Log?</h1>
            <h3>Cat-A-Log is an npm package designed to send custom logs from your EC2 or Lambda instance in AWS to AWS Cloudwatch.</h3>
            <h1>Why Use Cat-A-Log?</h1>
            <h3>Why use a washing machine when you can do them by hand? Becuase it makes your job way easier! Leveraging AWS Lambda Powertools we can use the cat-a-log function to invoke and format logs into AWS Embedded Metric Format. By publishing these logs to AWS Cloudwatch, we are able to provide engineers with automatic metric visulaization to make the process of debugging logs much more efficient.</h3>
            <h1>Meet the Team</h1>
            <ul className='teamlist'>
                <Card image={BrianImage} name='Brian Anderson' text={['github', 'linkedin']} />
                <Card image={HarrisImage} name='Harris Awan' text={['http://www.github.com/HarrAwa', 'http://www.linkedin.com/in/harrawan123/']} />
                <Card image={ClaraImage} name='Clara Regula' text={['github', 'linkedin']} />
                <Card image={CurranImage} name='Curran Lee' text={['github', 'linkedin']} />
                <Card image={JacobImage} name='Jacob Anderson' text={['github', 'linkedin']} />
            </ul>
        </div>
    )
}

export default About;