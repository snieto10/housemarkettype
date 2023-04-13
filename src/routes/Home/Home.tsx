import MenuBar from '../../components/MenuBar/MenuBar';
import Body from '../../components/Body';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <>
      <MenuBar />
      <Outlet />
    </>
  );
}

export default Home;
