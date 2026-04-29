import React from 'react';
import { CreditCard, Download, CheckCircle, Clock } from 'lucide-react';

const feesData = [
  { id: 'REC-2026-001', description: 'Semester 5 Tuition Fee', date: '15 Aug 2026', amount: '₹45,000', status: 'Paid' },
  { id: 'REC-2026-002', description: 'Exam & Library Fee', date: '15 Aug 2026', amount: '₹2,500', status: 'Paid' },
  { id: 'REC-2026-003', description: 'Hostel & Mess Fee (Nov)', date: '28 Oct 2026', amount: '₹12,000', status: 'Pending' },
];

const Fees = () => {
  return (
    <div className="animate-fade-in" style={{ padding: '1.5rem' }}>
      <div className="section-title">
        <span style={{ fontSize: '1.875rem' }}>Fees & Payments</span>
      </div>

      <div className="dashboard-grid" style={{ padding: 0, marginBottom: '2rem' }}>
        <div className="col-span-8 glass" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))' }}>
          <div>
            <p className="text-muted" style={{ marginBottom: '0.5rem' }}>Outstanding Balance</p>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--danger)' }}>₹12,000</h2>
            <p className="text-sm" style={{ color: 'var(--text-main)', marginTop: '0.5rem' }}>Due by 5th Nov 2026</p>
          </div>
          <button style={{ padding: '1rem 2rem', background: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '12px', fontWeight: '600', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)' }}>
            <CreditCard size={20} />
            Pay Now
          </button>
        </div>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Payment History</h3>
      <div className="glass" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--surface-color)' }}>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--text-muted)' }}>Receipt No.</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--text-muted)' }}>Description</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--text-muted)' }}>Date</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--text-muted)' }}>Amount</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--text-muted)' }}>Status</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--text-muted)', textAlign: 'right' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {feesData.map((fee) => (
              <tr key={fee.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '1rem 1.5rem', fontWeight: '500' }}>{fee.id}</td>
                <td style={{ padding: '1rem 1.5rem' }}>{fee.description}</td>
                <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)' }}>{fee.date}</td>
                <td style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>{fee.amount}</td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  {fee.status === 'Paid' ? (
                    <span className="badge low" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><CheckCircle size={12}/> Paid</span>
                  ) : (
                    <span className="badge medium" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Clock size={12}/> Pending</span>
                  )}
                </td>
                <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                  <button className="icon-button" title="Download Receipt" style={{ display: 'inline-flex' }}>
                    <Download size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Fees;
