import React, { useState } from 'react';
import {
  Send,
  Mail,
  User,
  Building2,
  FileQuestion,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ShieldAlert,
  RotateCcw,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    institution: '',
    topic: 'General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReceipt, setSubmittedReceipt] = useState(null);

  const topicOptions = [
    'General Academic Inquiry',
    'Assessment-3 Project Feedback',
    'Forensic DNA Deconvolution Research',
    'Volatile Cyber & Memory Forensics',
    '3D Ballistics Topography Models',
    'Forensic Toxicology & NPS Identification',
    'Legal Admissibility & Daubert Inquiries',
  ];

  const validate = () => {
    const errs = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid academic or professional email address.';
    }

    if (!formData.institution.trim()) {
      errs.institution = 'Please enter your university, college, or laboratory department.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = 'Please provide a detailed inquiry message (minimum 15 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate forensic dispatch ticket generation
    setTimeout(() => {
      const ticketId = `DISPATCH-${Math.floor(1000 + Math.random() * 9000)}-AI-LAB`;
      const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC';

      setSubmittedReceipt({
        ticketId,
        timestamp,
        name: formData.fullName,
        email: formData.email,
        topic: formData.topic,
        institution: formData.institution,
      });

      setIsSubmitting(false);
      setFormData({
        fullName: '',
        email: '',
        institution: '',
        topic: 'General Inquiry',
        message: '',
      });
    }, 700);
  };

  const handleReset = () => {
    setSubmittedReceipt(null);
    setErrors({});
  };

  return (
    <section id="contact" className="section-wrapper" style={{ background: 'rgba(2, 7, 22, 0.6)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>ACADEMIC CONSULTATION & LAB DISPATCH</span>
          </div>
          <h2 className="section-title">
            Connect with the <span className="section-title-highlight">Forensic AI Hub</span>
          </h2>
          <p className="section-subtitle">
            Submit questions regarding computational criminalistics models, request project assessment
            clarifications, or collaborate on educational forensic research.
          </p>
        </div>

        <div
          style={{
            maxWidth: '840px',
            margin: '0 auto',
          }}
        >
          {!submittedReceipt ? (
            <div
              className="glass-panel"
              style={{
                padding: '2.5rem',
                borderRadius: '24px',
                background: 'linear-gradient(180deg, rgba(8, 22, 58, 0.85) 0%, rgba(3, 10, 28, 0.95) 100%)',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
              }}
            >
              <form onSubmit={handleSubmit} noValidate>
                {/* Name & Email Row */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.25rem',
                  }}
                >
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">
                      Full Name *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Dr. Alex Rivera"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="form-input"
                        style={{
                          borderColor: errors.fullName ? '#ef4444' : undefined,
                        }}
                      />
                    </div>
                    {errors.fullName && <div className="form-error">{errors.fullName}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Academic / Professional Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="alex.rivera@university.edu"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      style={{
                        borderColor: errors.email ? '#ef4444' : undefined,
                      }}
                    />
                    {errors.email && <div className="form-error">{errors.email}</div>}
                  </div>
                </div>

                {/* Institution & Inquiry Topic Row */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.25rem',
                  }}
                >
                  <div className="form-group">
                    <label className="form-label" htmlFor="institution">
                      University, College or Institution *
                    </label>
                    <input
                      id="institution"
                      name="institution"
                      type="text"
                      placeholder="Department of Forensic Science & Cybercrime"
                      value={formData.institution}
                      onChange={handleChange}
                      className="form-input"
                      style={{
                        borderColor: errors.institution ? '#ef4444' : undefined,
                      }}
                    />
                    {errors.institution && <div className="form-error">{errors.institution}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="topic">
                      Area of Inquiry / Assessment Topic
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      className="form-select"
                      style={{ cursor: 'pointer' }}
                    >
                      {topicOptions.map((opt, i) => (
                        <option key={i} value={opt} style={{ background: '#050f28', color: '#ffffff' }}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Inquiry Details & Academic Context *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Describe your inquiry, project assessment review points, or research interest..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    style={{
                      borderColor: errors.message ? '#ef4444' : undefined,
                      resize: 'vertical',
                    }}
                  />
                  {errors.message && <div className="form-error">{errors.message}</div>}
                </div>

                {/* Submit Button & Disclaimer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    marginTop: '1.5rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ShieldAlert size={16} color="var(--text-muted)" />
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                      EDUCATIONAL SUBMISSION PORTAL • ZERO DATA TRANSMITTED EXTERNALLY
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{ gap: '0.5rem', minWidth: '180px' }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="pulse-node" />
                        <span>Verifying Dispatch...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Dispatch Inquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Success Confirmation Receipt */
            <div
              className="glass-panel"
              style={{
                padding: '3rem 2.5rem',
                borderRadius: '24px',
                background: 'linear-gradient(180deg, rgba(8, 26, 68, 0.9) 0%, rgba(3, 10, 28, 0.95) 100%)',
                border: '1px solid #10b981',
                boxShadow: '0 0 40px rgba(16, 185, 129, 0.25)',
                textAlign: 'center',
                animation: 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '2px solid #10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  boxShadow: '0 0 25px rgba(16, 185, 129, 0.35)',
                }}
              >
                <CheckCircle2 size={32} color="#10b981" />
              </div>

              <div className="badge badge-green" style={{ marginBottom: '1rem' }}>
                DISPATCH VERIFIED & ARCHIVED
              </div>

              <h3 style={{ fontSize: '1.85rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                Inquiry Successfully Logged!
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '540px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
                Thank you, <strong>{submittedReceipt.name}</strong>. Your academic inquiry regarding{' '}
                <strong>{submittedReceipt.topic}</strong> has been registered in the simulation ledger.
              </p>

              {/* Receipt Details Box */}
              <div
                style={{
                  maxWidth: '500px',
                  margin: '0 auto 2rem',
                  padding: '1.25rem',
                  background: 'rgba(2, 8, 24, 0.8)',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 242, 254, 0.2)',
                  textAlign: 'left',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>TICKET ID:</span>
                  <span style={{ color: 'var(--cyan-primary)', fontWeight: 700 }}>{submittedReceipt.ticketId}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>TIMESTAMP:</span>
                  <span style={{ color: '#ffffff' }}>{submittedReceipt.timestamp}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>ORGANIZATION:</span>
                  <span style={{ color: '#ffffff' }}>{submittedReceipt.institution}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>STATUS:</span>
                  <span style={{ color: '#34d399' }}>SEALED IN LOGBOOK</span>
                </div>
              </div>

              <button onClick={handleReset} className="btn btn-secondary" style={{ gap: '0.5rem' }}>
                <RotateCcw size={16} />
                <span>Submit Another Inquiry</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

