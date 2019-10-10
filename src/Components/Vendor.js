import React, {useState, useEffect} from 'react';
import axios from 'axios'
import cheerio from 'cheerio' 
export let vendorStatus = null; 

const Vendor =({resource, name})=> {
    const [resources, setResources] = useState([]); 
    useEffect(
        () => {
            (async resource => {
                const response = await axios.get(resource)
                .then((response)=>{
                    const $ = cheerio.load(response.data);
                    const status= $('.page-status')
                    const output = status.find('span').text();
                    let splitOutput = output.split(' ');
                    let outputArray = []; 
                    splitOutput.forEach((el)=>{
                        if(el.length > 1) {
                            outputArray.push(el);
                        }
                    })
                    let parsedOutput = outputArray.join(' ').trim();
                    if (parsedOutput === 'All Systems Operational') {
                        vendorStatus = true;
                    } else {
                        parsedOutput = 'Some Systems operational'
                    }
                   
                    setResources(parsedOutput);
                })
                .catch((error)=>{
                    console.log(error);
                });
            })(resource);
        }, [resource]
    );
    return(
        <div style={vendorStyle}>
            {name}:  {resources}
        </div>
    ) 
}

const vendorStyle ={
    border: '1px solid black'
}

export default Vendor;