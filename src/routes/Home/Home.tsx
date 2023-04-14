import MenuBar from '../../components/MenuBar/MenuBar';
import Body from '../../components/Body';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';

interface Props {
  openSignIn: () => void;
}

function Home({ openSignIn }: Props) {
  return (
    <>
      <MenuBar openSignIn={openSignIn} />
      <Outlet />
    </>
  );
}

export default Home;
