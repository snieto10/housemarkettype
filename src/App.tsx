import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import SignIn from './routes/SignIn.tsx/SignIn';
import CreateUser from './routes/CreateUser/CreateUser';
import Body1 from './components/Body1/Body1';

function App() {
  const [count, setCount] = useState(0);
  const [signInOpen, setSignInOpen] = useState(false);
  const [createUserOpen, setCreateUserOpen] = useState(false);

  const openSignIn = () => {
    setSignInOpen((prev) => !prev);
  };

  const openCreateUser = () => {
    setCreateUserOpen((prev) => !prev);
  };

  const signInToCreateUser = () => {
    setSignInOpen(false);
    setCreateUserOpen(true);
  };
  const createUserToSignIn = () => {
    setSignInOpen(true);
    setCreateUserOpen(false);
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<Home openSignIn={openSignIn} />}>
          <Route index element={<Body1 />} />
        </Route>
      </Routes>
      <SignIn
        signInOpen={signInOpen}
        openSignIn={openSignIn}
        signInToCreateUser={signInToCreateUser}
      />
      <CreateUser
        openCreateUser={openCreateUser}
        createUserOpen={createUserOpen}
        createUserToSignIn={createUserToSignIn}
      />
    </>
  );
}

export default App;
