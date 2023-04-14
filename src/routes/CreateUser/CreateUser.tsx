import './createUser.css';

function CreateUser() {
  return (
    <>
      <div className={'SIbackground'}>
        <div className='SIbox'>
          <div className='SIx'>
            <span>X</span>
          </div>
          <h1 className='SItitle'>Create Free Account</h1>
          <p className='SIpara'>Already have an account ? Sign in</p>
          <div className='SIwidth'>
            <form>
              <label className='SIlabel' htmlFor='email'>
                Email:
              </label>
              <input className='SIinput1' name='email' id='email' type='text' />
              <br />
              <label className='SIlabel' htmlFor='password'>
                Password:
              </label>
              <input
                name='password'
                id='password'
                className='SIinput2'
                type='password'
              />
              <label className='SIlabel' htmlFor='password'>
                First Name
              </label>
              <input
                name='password'
                id='password'
                className='SIinput2'
                type='password'
              />
              <label className='SIlabel' htmlFor='password'>
                Last Name
              </label>
              <input
                name='password'
                id='password'
                className='SIinput2'
                type='password'
              />
            </form>
          </div>
          <br />
          <div className='SIcenter'>
            <button className='btn SIsignin-btn'>Create Account</button>
          </div>

          <p className='SIor'>or</p>
          <div className='SIcenter'>
            <button className='btn SIgoogle-btn SIcenter'>
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateUser;
