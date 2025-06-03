import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import CourseList from './components/CourseList';
import PreRegister from './components/PreRegister';
import ApprovePreRegs from './components/ApprovePreRegs';
import FinalRegistration from './components/FinalRegistration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/preregister" element={<PreRegister />} />
        <Route path="/approve" element={<ApprovePreRegs />} />
        <Route path="/finalregister" element={<FinalRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
