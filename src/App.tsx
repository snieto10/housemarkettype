import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Home from './routes/Home/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<h1>Hello</h1>} />
          <Route path='/house' element={<h1>House</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
