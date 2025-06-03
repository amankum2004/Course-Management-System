import { useState } from 'react';
import API from '../api/api';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleLogin = async () => {
    const res = await API.post('/auth/login', form);
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    alert("Login successful");
    window.location.reload();
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
