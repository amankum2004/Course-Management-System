import { useEffect, useState } from 'react';
import API from '../api/api';

export default function PreRegister() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    API.get('/courses').then(res => setCourses(res.data));
  }, []);

  const handlePreRegister = (id) => {
    API.post('/prereg', { courseId: id }).then(() => alert("Pre-registered"));
  };

  return (
    <div>
      <h2>Pre-Register</h2>
      {courses.map(c => (
        <div key={c.id}>
          {c.code} - {c.title} <button onClick={() => handlePreRegister(c.id)}>Pre-Register</button>
        </div>
      ))}
    </div>
  );
}
