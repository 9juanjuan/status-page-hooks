import React, {useState, useEffect} from 'react';
import axios from 'axios'
import cheerio from 'cheerio' 

const Vendor =({resource, name})=> {
    const [resources, setResources] = useState([]); 
    useEffect(
        () => {
            (async resource => {
                const response = await axios.get(resource)
                .then((response)=>{
                    const $ = cheerio.load(response.data);
                    const status= $('.container')
                    const output = status.find('span').text();
                    setResources(output);
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