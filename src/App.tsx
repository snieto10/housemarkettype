import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import MenuBar from './components/MenuBar/MenuBar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MenuBar />
    </>
  );
}

export default App;
