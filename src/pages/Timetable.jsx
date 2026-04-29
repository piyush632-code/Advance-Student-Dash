import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const scheduleData = [
  { time: '09:00 AM - 10:30 AM', course: 'DAA (CS301)', location: 'Lecture Theatre-3 (LT-3)', type: 'Lecture', color: 'var(--primary-color)' },
  { time: '11:00 AM - 12:30 PM', course: 'DBMS Lab', location: 'Computer Lab 2', type: 'Lab', color: 'var(--accent-color)' },
  { time: '01:30 PM - 03:00 PM', course: 'Computer Networks', location: 'Room 102, Block B', type: 'Lecture', color: 'var(--success)' },
];

const Timetable = () => {
  return (
    <div className="animate-fade-in" style={{ padding: '1.5rem' }}>
      <div className="section-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '1.875rem' }}>Today's Timetable</span>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="glass" style={{ padding: '0.5rem 1rem', background: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '500' }}>Today</button>
          <button className="glass" style={{ padding: '0.5rem 1rem', background: 'transparent', color: 'var(--text-main)', borderRadius: '8px', cursor: 'pointer', fontWeight: '500' }}>Weekly View</button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {scheduleData.map((slot, index) => (
          <div key={index} className="glass" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '2rem', borderLeft: `4px solid ${slot.color}` }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', minWidth: '160px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: 'var(--text-main)' }}>
                <Clock size={16} color={slot.color} />
                {slot.time}
              </div>
            </div>
            
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.25rem' }}>{slot.course}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <MapPin size={14} /> {slot.location}
              </div>
            </div>

            <div>
              <span style={{ padding: '0.25rem 0.75rem', backgroundColor: 'var(--surface-color)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: '600', border: '1px solid var(--border-color)' }}>
                {slot.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timetable;
