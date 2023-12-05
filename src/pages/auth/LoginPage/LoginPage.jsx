import { useState } from 'react';
import { Button } from '../../../Components/sharedComponents/Button';
import AtIcon from '../../../assets/atIcon.svg?react';
import LockIcon from '../../../assets/lockIcon.svg?react';
import Logo from '../../../assets/logo_portrait.svg?react';
import { login } from '../service';
import './login.css';

function LoginPage() {
  const iconOptions = {
    fill: '#2e2e2e',
    height: '16',
    width: '16',
    class: 'inputIcon'
  };
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    rememberMe: ''
  });

  const handleSubmit = async event => {
    event.preventDefault();
    await login(credentials);
  };
  const handleCredentialsChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };
  const handleRememberMeChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.checked
    });
  };

  const disabled = !(credentials.email && credentials.password);
  return (
    <main className='MainLoginPage'>
      <form
        className='form_main'
        action=''
        id='form-login'
        onSubmit={handleSubmit}
      >
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
            id='email'
            className='inputField'
            type='email'
            name='email'
            onChange={handleCredentialsChange}
            value={credentials.email}
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
            onChange={handleCredentialsChange}
            value={credentials.password}
          />
        </div>

        <Button type='submit' className='submitButton' disabled={disabled}>
          Enviar
        </Button>

        <div className='signupContainer'>
          <label>
            <input
              type='checkbox'
              name='rememberMe'
              onChange={handleRememberMeChange}
              checked={credentials.rememberMe}
            />
            Recuerdame en este dispositivo
          </label>
        </div>
      </form>
    </main>
  );
}
export default LoginPage;
