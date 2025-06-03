import { useEffect, useState } from 'react';
import API from '../api/api';

export default function ApprovePreRegs() {
  const [preregs, setPreregs] = useState([]);

  useEffect(() => {
    API.get('/courses').then(res => {
      const facultyCourses = res.data.filter(c => c.facultyId === JSON.parse(localStorage.getItem('user')).id);
      const courseId = facultyCourses[0]?.id;
      if (courseId) {
        API.get(`/prereg/${courseId}`).then(res => setPreregs(res.data));
      }
    });
  }, []);

  const handleUpdate = (id, status) => {
    API.put('/prereg', { preregId: id, status }).then(() => {
      alert("Updated");
      setPreregs(prev => prev.map(p => p.id === id ? { ...p, status } : p));
    });
  };

  return (
    <div>
      <h2>Approve Pre-Registrations</h2>
      {preregs.map(p => (
        <div key={p.id}>
          {p.student.name} - {p.status}
          <button onClick={() => handleUpdate(p.id, 'approved')}>Approve</button>
          <button onClick={() => handleUpdate(p.id, 'rejected')}>Reject</button>
        </div>
      ))}
    </div>
  );
}
