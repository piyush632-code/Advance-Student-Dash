import React from 'react';
import { UserCheck, AlertTriangle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const attendanceData = [
  { name: 'CS301', attended: 32, total: 36 },
  { name: 'CS302', attended: 28, total: 32 },
  { name: 'CS303', attended: 21, total: 29 },
  { name: 'CS304', attended: 25, total: 25 },
];

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6'];

const pieData = [
  { name: 'Present', value: 86 },
  { name: 'Absent', value: 14 },
];

const Attendance = () => {
  return (
    <div className="animate-fade-in" style={{ padding: '1.5rem' }}>
      <div className="section-title">
        <span style={{ fontSize: '1.875rem' }}>Attendance Overview</span>
      </div>
      
      <div className="dashboard-grid" style={{ padding: 0 }}>
        <div className="col-span-4 glass" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Overall Attendance</h3>
          <div style={{ height: '200px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  <Cell key="cell-0" fill="var(--success)" />
                  <Cell key="cell-1" fill="var(--danger)" />
                </Pie>
                <Tooltip contentStyle={{ background: 'var(--surface-color)', border: 'none', borderRadius: '8px', color: '#fff' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--success)' }}>86%</div>
          <p className="text-muted text-sm" style={{ textAlign: 'center', marginTop: '0.5rem' }}>Meeting the 75% UGC minimum criteria</p>
        </div>

        <div className="col-span-8 glass" style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1.5rem' }}>Subject-wise Attendance</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {attendanceData.map((subject, index) => {
              const percentage = Math.round((subject.attended / subject.total) * 100);
              return (
                <div key={subject.name} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '60px', fontWeight: '600' }}>{subject.name}</div>
                  <div style={{ flex: 1, height: '12px', backgroundColor: 'var(--surface-color)', borderRadius: '6px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${percentage}%`, backgroundColor: COLORS[index % COLORS.length], borderRadius: '6px' }}></div>
                  </div>
                  <div style={{ width: '40px', textAlign: 'right', fontWeight: '600' }}>{percentage}%</div>
                  <div className="text-muted text-xs" style={{ width: '60px', textAlign: 'right' }}>{subject.attended}/{subject.total}</div>
                </div>
              );
            })}
          </div>
          
          <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: '8px', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <AlertTriangle color="var(--warning)" size={24} />
            <div>
              <p style={{ color: 'var(--warning)', fontWeight: '600', fontSize: '0.875rem' }}>Warning</p>
              <p className="text-sm" style={{ color: 'var(--text-main)' }}>Your attendance in OS (CS303) is at 72%, which is below the 75% threshold. Please attend the upcoming classes to avoid debarment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
