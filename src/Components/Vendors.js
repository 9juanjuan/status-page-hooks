import React from 'react'
import Vendor from './Vendor'

const Vendors =()=> {
return (
    <div style={vendorsStyle}>
        <Vendor name={'Jira'} resource={'https://jira-software.status.atlassian.com/'}/>
        <Vendor name ={'Iterable'} resource={'https://jira-software.status.atlassian.com/'}/>
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