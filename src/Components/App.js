import React from 'react';
import Vendors from './Vendors'
function App() {
  return (
    <div>  
      <div style={headerStyle}>Vendor status page</div>    
        <Vendors/>
    </div>

  );
}
const headerStyle={
  margin: 'auto',
  marginTop : '20px',
  marginBottom: '20px',
  fontSize: '30px',
  textAlign: 'center',}

export default App;
