import { useEffect, useState } from 'react';
import API from '../api/api';

export default function FinalRegistration() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    API.get('/courses').then(res => setCourses(res.data));
  }, []);

  const handleRegister = (id) => {
    API.post('/register', { courseId: id }).then(() => alert("Registered"));
  };

  return (
    <div>
      <h2>Final Registration</h2>
      {courses.map(c => (
        <div key={c.id}>
          {c.code} - {c.title}
          <button onClick={() => handleRegister(c.id)}>Register</button>
        </div>
      ))}
    </div>
  );
}
