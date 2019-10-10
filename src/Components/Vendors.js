import React from 'react';
import Vendor, {vendorStatus} from './Vendor';
// import let vendorsStyle from './Vendor';
let vendorStyle;
if (vendorStatus === true) {
     vendorStyle = {
        backgroundColor: '#2fcc66'
    }
} else {
     vendorStyle = {
        backgroundColor: '#2fcc66'
    }
}

const Vendors =()=> {
return (
    <div style={vendorsStyle}>
        <div style={vendorStyle}>            
            <Vendor name={'Jira'} resource={'https://jira-software.status.atlassian.com/'}/>
        </div>
        <div style={vendorStyle}>
            <Vendor name ={'Iterable'} resource={'https://status.iterable.com'}/>
        </div>
    </div>
    )
}

const vendorsStyle ={
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    height: '50%',
    width: '50%',
    border: '2px solid black'
}

export default Vendors