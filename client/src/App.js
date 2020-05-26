import React, { useState } from 'react';
import Routes  from './routes'


function App() {
  const [token, setToken] = useState(false)
  return (
    <div className="App">
      {token ? <Routes.Registered /> : <Routes.Unregistered />}
    </div>
  );
}

export default App;