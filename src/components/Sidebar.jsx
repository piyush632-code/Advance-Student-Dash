import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  CalendarDays,
  Settings,
  LogOut,
  UserCheck,
  CreditCard,
  GraduationCap
} from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="brand">
        <GraduationCap className="brand-icon" size={32} />
        <span>EduDash</span>
      </div>
      
      <nav className="flex-col w-full" style={{ flex: 1 }}>
        <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>
        <NavLink to="/courses" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
          <BookOpen size={20} />
          Courses
        </NavLink>
        <NavLink to="/assignments" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
          <FileText size={20} />
          Assignments
        </NavLink>
        <NavLink to="/attendance" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
          <UserCheck size={20} />
          Attendance
        </NavLink>
        <NavLink to="/timetable" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
          <CalendarDays size={20} />
          Timetable
        </NavLink>
        <NavLink to="/fees" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
          <CreditCard size={20} />
          Fees
        </NavLink>
      </nav>

      <div className="flex-col gap-2">
        <NavLink to="/settings" className="nav-link">
          <Settings size={20} />
          Settings
        </NavLink>
        <button className="nav-link" style={{ background: 'transparent', border: 'none', width: '100%', textAlign: 'left', fontFamily: 'inherit', fontSize: '1rem', cursor: 'pointer' }}>
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
