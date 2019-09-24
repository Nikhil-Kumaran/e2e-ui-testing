import React from 'react';
import AppLayout from '../layout/AppLayout.js'

function App() {
  return (
    <AppLayout linkKey={'1'}>
      <div style={{textAlign:'center'}}>
        <h1>Hi people</h1>
        <h1>This is a test site to demonstrate the uses of puppeteer</h1><br/><br/>
        <div >
          <img alt = 'puppeteer' src='https://miro.medium.com/max/1600/1*9BG6g9a_2wGwAJVs5aAofg.png'></img>
        </div>
      </div>
    </AppLayout>
  );
}

export default App;
