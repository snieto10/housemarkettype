import logo from '../../assets/images/marketLogo.svg';
import menu from '../../assets/images/bars-solid.svg';
import './menuBar.css';

interface Props {
  openSignIn: () => void;
}

function MenuBar({ openSignIn }: Props) {
  return (
    <>
      <header className='MBmain container'>
        <div className='MBlogo'>
          <img className='MBmenu' src={menu} alt='Market Menu' />
          <img className='MBimage' src={logo} alt='Market Logo' />
        </div>
        <div>
          <button className='btn' onClick={openSignIn}>
            Sign In
          </button>
        </div>
      </header>
    </>
  );
}

export default MenuBar;
