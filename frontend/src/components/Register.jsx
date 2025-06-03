import { useState } from 'react';
import API from '../api/api';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: '', school: '' });

  const handleRegister = async () => {
    await API.post('/auth/register', form);
    alert("Registered");
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <input placeholder="School" onChange={e => setForm({ ...form, school: e.target.value })} />
      <select onChange={e => setForm({ ...form, role: e.target.value })}>
        <option>Select Role</option>
        <option value="student">Student</option>
        <option value="faculty">Faculty</option>
        <option value="chair">Chair</option>
      </select>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
