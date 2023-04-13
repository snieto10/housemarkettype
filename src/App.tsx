import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import SignIn from './routes/SignIn.tsx/SignIn';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<h1>Hello</h1>} />
          <Route path='/signin' element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
