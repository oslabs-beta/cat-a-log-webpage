import React from 'react';
import '../styles.css';
import catlogo from '../assets/Catalog_art.png';

const Read = () => {
    return (
        <div className='read'>
            <h1>Cat-A-Log Docs</h1> 
            <p>This npm package helps you integrate AWS CloudWatch with AWS Embedded Metric Format (EMF) Logs and publish them to Cloudwatch using AWS Lambda Powertools. EMF formatting will allow for chosen metrics to be automatically visualized in Cloudwatch metrics for simpler log debugging.</p>
            <p align="center">
                <img src={catlogo} width="200" />
            </p>
            <h1>Why use Cat-A-Log?</h1>
            <p>Why use a washing machine when you can do them by hand? Because it saves you time and makes your job way easier! Leveraging AWS Lambda Powertools we can use the cat-a-log function to invoke and format logs into AWS Embedded Metric Format. By publishing these logs to AWS Cloudwatch, we are able to provide engineers with automatic metric visualization to make the process of debugging logs much more efficient. Cat-a-log utilizes a cache to make efficient work of sending logs to Cloudwatch.</p>
            <h1>About Embedded Metric Formatting (EMF)</h1>
            <p>EMF is a JSON specification that enables CloudWatch Logs to automatically extract embedded metric values from structured log events. It simplifies real-time monitoring by reducing complexity and cost for applications needing custom metrics and structured logging. For more information please visit the following link: 
                <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Embedded_Metric_Format_Specification.html" target="_blank">AWS Documentation on EMF Formatting</a>
            </p>
            
            <h1>Instructions</h1>
            <h3>Prerequisites</h3>
            <p>Your chosen Integrated Development Environment (i.e. VS Code) must already be connected to AWS Lambda. For more guidance on setting up AWS Lambda we recommend following this helpful tutorial from AWS: <a href='https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-hello-world.html'>Deploy Hello World Application with AWS SAM</a></p>
            <h1>Installation:</h1>
            <ol>
                <li>
                    Install our package using the command `npm install cat-a-logs` then import the function and cache into your js file that connects to AWS Lambda `import &#123; catalog &#125; from "cat-a-logs/index.js";` Check out Cat-A-Log on npm using the attached link: <a href="https://www.npmjs.com/package/cat-a-logs?activeTab=readme" target="_blank">Cat-A-Log</a>
                </li>
                <li>
                    Now enter your arguments into the catalog function! Lets go through each argument one at a time and see what this looks like. First Lets take a look at the function definition:
                    <div id='parameters'>
                        function catalog(
                            <br></br>
                        )
                    </div>
                    <ul>
                        <li>
                        trackedVariable: This variable represents the numerical value of the metric that will appear under the category "Custom namespace" in Cloudwatch Metrics. Custom metric category/namespace/AWS Namespace. This is AWS Cloudwatch&gt;Metrics&gt;All metrics&gt;Custom namespaces(ex. CatALog)&gt;Dimensions(ex. Server, functionVersion)
                        </li>
                        <li>
                        metricName: This is a unique label of the tracked variable that will be reflected inside AWS Cloudwatch. Must be written as a string In the below image this corresponds to Latency --> AWS Cloudwatch>Metrics>All metrics>Custom namespaces
                        </li>
                    </ul>
                </li>
            </ol>
        </div> 
    )
}

export default Read;