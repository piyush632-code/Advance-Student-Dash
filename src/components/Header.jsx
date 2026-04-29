import React from 'react';
import { Search, Bell, MessageSquare } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <Search size={18} color="var(--text-muted)" />
        <input type="text" placeholder="Search courses, assignments..." />
      </div>
      
      <div className="header-actions">
        <button className="icon-button">
          <MessageSquare size={20} />
        </button>
        <button className="icon-button" style={{ position: 'relative' }}>
          <Bell size={20} />
          <span style={{ 
            position: 'absolute', 
            top: '4px', 
            right: '4px', 
            width: '8px', 
            height: '8px', 
            backgroundColor: 'var(--danger)', 
            borderRadius: '50%' 
          }}></span>
        </button>
        <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-color)', margin: '0 8px' }}></div>
        <div className="flex items-center gap-2" style={{ cursor: 'pointer' }}>
          <div className="flex-col" style={{ textAlign: 'right' }}>
            <span className="text-sm font-semibold text-main">Aarav Sharma</span>
            <span className="text-xs text-muted">BCA (AI & AS), 2nd Sem</span>
          </div>
          <div className="avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--surface-color)', color: 'var(--primary-color)', fontWeight: 'bold', fontSize: '1.2rem' }}>
            AS
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
