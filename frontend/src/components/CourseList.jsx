import { useEffect, useState } from 'react';
import API from '../api/api';

export default function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    API.get('/courses').then(res => setCourses(res.data));
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      {courses.map(c => (
        <div key={c.id}>
          <strong>{c.code}</strong> - {c.title} - Slot: {c.slot || 'N/A'}
        </div>
      ))}
    </div>
  );
}
