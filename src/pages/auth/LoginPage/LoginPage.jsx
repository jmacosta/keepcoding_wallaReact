import AtIcon from '../../../assets/atIcon.svg?react';
import LockIcon from '../../../assets/lockIcon.svg?react';
import Logo from '../../../assets/logo_portrait.svg?react';
import './login.css';

function LoginPage() {
  const iconOptions = {
    fill: '#2e2e2e',
    height: '16',
    width: '16',
    class: 'inputIcon'
  };
  return (
    <main>
      <form className='form_main' action='' id='form-login'>
        <div className='form_main__logo'>
          <Logo height={'10vh'} />
        </div>
        <p className='heading'>Iniciar sesión</p>
        <div className='inputContainer'>
          <AtIcon
            fill={iconOptions.fill}
            height={iconOptions.height}
            width={iconOptions.width}
            className={iconOptions.class}
          />
          <input
            placeholder='Email'
            id='username'
            className='inputField'
            type='email'
            name='email'
          />
        </div>

        <div className='inputContainer'>
          <LockIcon
            fill={iconOptions.fill}
            height={iconOptions.height}
            width={iconOptions.width}
            className={iconOptions.class}
          />
          <input
            placeholder='Password'
            id='password'
            className='inputField'
            type='password'
            name='password'
          />
        </div>

        <button id='submitButton'>Enviar</button>

        <div className='signupContainer'>
          <label>
            <input type='checkbox' />
            Recuerdame en este dispositivo
          </label>

          {/* <div className='signupContainerButtons'>
            <button id='registerButton'>Regístrate</button>
            <button id='exitButton'>Salir</button>
          </div> */}
        </div>
      </form>
    </main>
  );
}
export default LoginPage;
