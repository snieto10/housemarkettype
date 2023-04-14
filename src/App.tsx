import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import SignIn from './routes/SignIn.tsx/SignIn';
import CreateUser from './routes/CreateUser/CreateUser';

function App() {
  const [count, setCount] = useState(0);
  const [signInOpen, setSignInOpen] = useState(false);
  const [createUserOpen, setCreateUserOpen] = useState(false);

  const openSignIn = () => {
    setSignInOpen(!signInOpen);
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<Home openSignIn={openSignIn} />}>
          <Route index element={<h1>Hello</h1>} />
        </Route>
      </Routes>
      <SignIn signInOpen={signInOpen} openSignIn={openSignIn} />
      <CreateUser />
    </>
  );
}

export default App;
