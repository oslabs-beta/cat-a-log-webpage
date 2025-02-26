import React from 'react';
import Read from './Read.js';
import '../styles.css';


const Docs = () => {
    return (
        <div className='docs'>
            <h1>Documentation</h1>
            
            <div>
            <a href=''>AWF EMF Specification Documentation</a>

            </div>
            <h1>AWS Documentation</h1>
            <div> 
                <a href='https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Embedded_Metric_Format_Specification.html'>AWF EMF Specification Documentation</a>
            </div>
        </div>
    )
}

export default Docs;