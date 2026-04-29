import React from 'react';
import { BookOpen, Users, Clock } from 'lucide-react';

const courseData = [
  { id: 1, name: 'Design & Analysis of Algorithms', code: 'CS301', progress: 75, instructor: 'Dr. R. K. Gupta', credits: 4 },
  { id: 2, name: 'Database Management Systems', code: 'CS302', progress: 90, instructor: 'Prof. Anjali Desai', credits: 4 },
  { id: 3, name: 'Operating Systems', code: 'CS303', progress: 40, instructor: 'Dr. Vikram Singh', credits: 3 },
  { id: 4, name: 'Computer Networks', code: 'CS304', progress: 60, instructor: 'Dr. Neha Sharma', credits: 3 },
];

const Courses = () => {
  return (
    <div className="animate-fade-in" style={{ padding: '1.5rem' }}>
      <div className="section-title">
        <span style={{ fontSize: '1.875rem' }}>My Subjects</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {courseData.map(course => (
          <div key={course.id} className="glass" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>{course.name}</h3>
                <p className="text-muted text-sm">{course.code}</p>
              </div>
              <div style={{ padding: '0.5rem', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px', color: 'var(--primary-color)' }}>
                <BookOpen size={20} />
              </div>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                <span className="text-muted">Syllabus Covered</span>
                <span className="font-semibold">{course.progress}%</span>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--surface-color)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${course.progress}%`, height: '100%', backgroundColor: 'var(--primary-color)', borderRadius: '4px', transition: 'width 1s ease-in-out' }}></div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                <Users size={16} /> {course.instructor}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                <Clock size={16} /> {course.credits} Credits
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
