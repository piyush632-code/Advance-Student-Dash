import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';

const Settings = () => {
  return (
    <div className="animate-fade-in" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
      <div className="section-title">
        <span style={{ fontSize: '1.875rem' }}>Settings</span>
      </div>
      <div className="glass" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
        <SettingsIcon size={48} color="var(--text-muted)" />
        <p className="text-muted text-lg">Settings module is currently under construction.</p>
      </div>
    </div>
  );
};

export default Settings;
