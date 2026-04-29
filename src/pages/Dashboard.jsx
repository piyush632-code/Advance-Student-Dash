import React from 'react';
import { BookOpen, Clock, Target, Award, Plus, FileVideo, Users, FileText } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Unit 1', grade: 8.2 },
  { name: 'Mid Sem 1', grade: 8.5 },
  { name: 'End Sem 1', grade: 8.4 },
  { name: 'Unit 1 (S2)', grade: 8.9 },
  { name: 'Mid Sem 2', grade: 8.8 },
];

const Dashboard = () => {
  return (
    <div className="animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <div className="dashboard-grid">
        
        {/* Welcome Section */}
        <div className="col-span-12 glass" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '0.5rem' }}>
              Welcome back, <span style={{ color: 'var(--primary-color)' }}>Aarav!</span> 👋
            </h1>
            <p className="text-muted">You have 3 assignments due this week and 2 upcoming classes today.</p>
          </div>
          <button style={{ 
            padding: '0.75rem 1.5rem', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            background: 'var(--primary-color)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'var(--transition)',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <Plus size={18} />
            New Note
          </button>
        </div>

        {/* Stats Cards */}
        <div className="col-span-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          <div className="glass stat-card">
            <div className="stat-icon" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary-color)' }}>
              <Target size={24} />
            </div>
            <div className="stat-content">
              <h3>Current CGPA</h3>
              <p>8.84</p>
            </div>
          </div>
          <div className="glass stat-card">
            <div className="stat-icon" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)', color: 'var(--accent-color)' }}>
              <BookOpen size={24} />
            </div>
            <div className="stat-content">
              <h3>Active Subjects</h3>
              <p>6</p>
            </div>
          </div>
          <div className="glass stat-card">
            <div className="stat-icon" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: 'var(--warning)' }}>
              <Clock size={24} />
            </div>
            <div className="stat-content">
              <h3>Total Credits</h3>
              <p>112</p>
            </div>
          </div>
          <div className="glass stat-card">
            <div className="stat-icon" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)' }}>
              <Award size={24} />
            </div>
            <div className="stat-content">
              <h3>Backlogs</h3>
              <p>0</p>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="col-span-8 glass chart-container">
          <div className="section-title">
            <span>SGPA Overview</span>
            <select style={{ padding: '0.5rem 1rem', background: 'var(--surface-color)', color: 'white', border: '1px solid var(--border-color)', borderRadius: '8px', outline: 'none', cursor: 'pointer' }}>
              <option>BCA (AI & AS)</option>
              <option>All Time</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorGrade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--primary-color)" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="var(--primary-color)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
              <XAxis dataKey="name" stroke="var(--text-muted)" tick={{fill: 'var(--text-muted)', fontSize: 12}} axisLine={false} tickLine={false} />
              <YAxis stroke="var(--text-muted)" tick={{fill: 'var(--text-muted)', fontSize: 12}} domain={[5, 10]} axisLine={false} tickLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)', borderRadius: '8px', color: 'var(--text-main)' }}
                itemStyle={{ color: 'var(--primary-color)' }}
              />
              <Area type="monotone" dataKey="grade" stroke="var(--primary-color)" strokeWidth={3} fillOpacity={1} fill="url(#colorGrade)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Tasks Section */}
        <div className="col-span-4 glass" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
          <div className="section-title">
            <span>Upcoming Tasks</span>
            <span className="text-sm text-muted" style={{ cursor: 'pointer' }}>View All</span>
          </div>
          <div className="flex-col" style={{ flex: 1, overflowY: 'auto' }}>
            <div className="task-item">
              <div className="task-info">
                <div className="task-icon">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: '600' }}>DAA Assignment</h4>
                  <p className="text-xs text-muted mt-1">CS301 • Due in 2 days</p>
                </div>
              </div>
              <span className="badge high">High</span>
            </div>
            <div className="task-item">
              <div className="task-info">
                <div className="task-icon">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: '600' }}>DBMS Lab Record</h4>
                  <p className="text-xs text-muted mt-1">CS302 • Due in 3 days</p>
                </div>
              </div>
              <span className="badge medium">Med</span>
            </div>
            <div className="task-item">
              <div className="task-info">
                <div className="task-icon">
                  <Users size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: '600' }}>Minor Project Review</h4>
                  <p className="text-xs text-muted mt-1">PRJ301 • Tomorrow, 4 PM</p>
                </div>
              </div>
              <span className="badge low">Low</span>
            </div>
            <div className="task-item">
              <div className="task-info">
                <div className="task-icon">
                  <FileVideo size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: '600' }}>NPTEL Lecture</h4>
                  <p className="text-xs text-muted mt-1">HUM201 • Optional</p>
                </div>
              </div>
              <span className="badge low">Low</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
