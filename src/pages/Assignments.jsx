import React from 'react';
import { FileText, CheckCircle, Clock } from 'lucide-react';

const assignmentsData = [
  { id: 1, title: 'DAA Practical File', course: 'Algorithms (CS301)', dueDate: '15 Oct 2026', status: 'Pending' },
  { id: 2, title: 'SQL Queries Assignment', course: 'DBMS (CS302)', dueDate: '18 Oct 2026', status: 'Pending' },
  { id: 3, title: 'OS Shell Scripting', course: 'Operating Systems (CS303)', dueDate: '10 Oct 2026', status: 'Submitted' },
  { id: 4, title: 'Network Topologies Report', course: 'Computer Networks (CS304)', dueDate: '05 Oct 2026', status: 'Graded', score: '9/10' },
];

const Assignments = () => {
  return (
    <div className="animate-fade-in" style={{ padding: '1.5rem' }}>
      <div className="section-title">
        <span style={{ fontSize: '1.875rem' }}>Assignments & Practicals</span>
      </div>
      <div className="glass" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--surface-color)' }}>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--text-muted)' }}>Assignment Name</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--text-muted)' }}>Subject</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--text-muted)' }}>Due Date</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--text-muted)' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {assignmentsData.map((task) => (
              <tr key={task.id} style={{ borderBottom: '1px solid var(--border-color)', transition: 'background 0.2s' }} className="task-item">
                <td style={{ padding: '1rem 1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ backgroundColor: 'var(--surface-color)', padding: '0.5rem', borderRadius: '8px' }}>
                      <FileText size={18} color="var(--primary-color)" />
                    </div>
                    <span style={{ fontWeight: '500' }}>{task.title}</span>
                  </div>
                </td>
                <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)' }}>{task.course}</td>
                <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)' }}>{task.dueDate}</td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  {task.status === 'Pending' && <span className="badge medium" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Clock size={12}/> Pending</span>}
                  {task.status === 'Submitted' && <span className="badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'rgba(59,130,246,0.1)', color: 'var(--primary-color)' }}><CheckCircle size={12}/> Submitted</span>}
                  {task.status === 'Graded' && <span className="badge low" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><CheckCircle size={12}/> Graded ({task.score})</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assignments;
