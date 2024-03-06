import { Form, FormValues } from 'formfusion';

import Input from '../Input';
import Button from '../Button';

import logo from '/logo.svg';
import './main.css';

function Main() {
  function onSubmit(data: FormValues) {
    console.log(data);
  }
  return (
    <div className="container">
      <a href="https://www.corelabui.com" target="_blank" className="logo">
        <img src={logo} className="logo__img" alt="CorelabUI logo" />
      </a>
      <Form onSubmit={onSubmit} className="form">
        <Input
          id="username"
          name="username"
          type="username"
          label="User name"
          placeholder="Jane"
          required
        />
        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          required
        />
        <div className="form__action">
          <Input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            label="Remember me"
          />
        </div>
        <Button>Sign in</Button>
      </Form>
    </div>
  );
}

export default Main;
