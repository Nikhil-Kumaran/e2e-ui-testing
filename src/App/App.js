import React from 'react';
import AppLayout from '../layout/AppLayout.js'

function App() {
  return (
    <AppLayout linkKey={'1'}>
      <div style={{textAlign:'center'}}>
        <h1>Hi people</h1>
        <h1>This is a test site to demonstrate the uses of puppeteer</h1><br/><br/>
        <div >
          <img alt = 'puppeteer' src='https://seeklogo.com/images/P/puppeteer-logo-254C5F1692-seeklogo.com.png'></img>
        </div>
      </div>
    </AppLayout>
  );
}

export default App;
