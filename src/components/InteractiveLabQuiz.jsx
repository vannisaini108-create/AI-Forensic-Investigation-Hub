import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  ArrowRight,
  HelpCircle,
  ShieldCheck,
} from 'lucide-react';
import { forensicQuizData } from '../data/quizData';

export default function InteractiveLabQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQ = forensicQuizData[currentQuestionIndex];

  const handleSelectOption = (idx) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionIndex(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOptionIndex === null || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);
    if (currentQ.options[selectedOptionIndex].correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < forensicQuizData.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionIndex(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const getRankBadge = (sc, total) => {
    const pct = (sc / total) * 100;
    if (pct >= 85) return { title: 'Senior Forensic AI Specialist', color: '#10b981', desc: 'Flawless grasp of computational criminalistics & courtroom standards.' };
    if (pct >= 60) return { title: 'Forensic Lab Analyst', color: '#00f2fe', desc: 'Solid technical understanding with strong analytical potential.' };
    return { title: 'Forensic Science Trainee', color: '#fbbf24', desc: 'Good baseline knowledge. Review the Lab Resources to boost your score.' };
  };

  return (
    <section id="quiz" className="section-wrapper" style={{ background: 'rgba(3, 9, 27, 0.6)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>ASSESSMENT-3 KNOWLEDGE CHECK</span>
          </div>
          <h2 className="section-title">
            Forensic AI <span className="section-title-highlight">Competency Quiz</span>
          </h2>
          <p className="section-subtitle">
            Evaluate your understanding of machine learning architectures, chain of custody integrity,
            and legal admissibility standards across criminal investigation.
          </p>
        </div>

        {/* Main Quiz Box */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            padding: '2.5rem',
            borderRadius: '24px',
            background: 'linear-gradient(180deg, rgba(8, 24, 62, 0.85) 0%, rgba(3, 10, 28, 0.95) 100%)',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
          }}
        >
          {!quizCompleted ? (
            <div>
              {/* Quiz Header: Question X of Y + Score Tracker */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.25rem',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span className="badge badge-cyan">{currentQ.discipline}</span>
                  <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    QUESTION {currentQuestionIndex + 1} OF {forensicQuizData.length}
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    color: 'var(--cyan-primary)',
                  }}
                >
                  CURRENT SCORE: <strong style={{ color: '#ffffff' }}>{score}</strong>
                </div>
              </div>

              {/* Progress Bar */}
              <div
                style={{
                  height: '4px',
                  width: '100%',
                  background: 'rgba(148, 163, 184, 0.15)',
                  borderRadius: '999px',
                  overflow: 'hidden',
                  marginBottom: '2rem',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${((currentQuestionIndex + 1) / forensicQuizData.length) * 100}%`,
                    background: 'linear-gradient(90deg, #00f2fe, #38bdf8)',
                    transition: 'width 0.3s ease',
                  }}
                />
              </div>

              {/* Question Text */}
              <h3
                style={{
                  fontSize: '1.35rem',
                  color: '#ffffff',
                  lineHeight: '1.4',
                  marginBottom: '1.75rem',
                }}
              >
                {currentQ.question}
              </h3>

              {/* Multiple Choice Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedOptionIndex === idx;
                  let borderStyle = '1px solid rgba(148, 163, 184, 0.15)';
                  let bgStyle = 'rgba(6, 18, 48, 0.65)';
                  let textColor = 'var(--text-secondary)';

                  if (isSelected && !isAnswerSubmitted) {
                    borderStyle = '1.5px solid #00f2fe';
                    bgStyle = 'rgba(0, 242, 254, 0.12)';
                    textColor = '#ffffff';
                  }

                  if (isAnswerSubmitted) {
                    if (opt.correct) {
                      borderStyle = '1.5px solid #10b981';
                      bgStyle = 'rgba(16, 185, 129, 0.15)';
                      textColor = '#ffffff';
                    } else if (isSelected && !opt.correct) {
                      borderStyle = '1.5px solid #ef4444';
                      bgStyle = 'rgba(239, 68, 68, 0.15)';
                      textColor = '#f87171';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswerSubmitted}
                      style={{
                        padding: '1rem 1.25rem',
                        borderRadius: '12px',
                        background: bgStyle,
                        border: borderStyle,
                        color: textColor,
                        textAlign: 'left',
                        cursor: isAnswerSubmitted ? 'default' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <span style={{ fontSize: '0.95rem', lineHeight: '1.45', fontWeight: isSelected ? 600 : 400 }}>
                        {opt.text}
                      </span>
                      {isAnswerSubmitted && opt.correct && <CheckCircle2 size={18} color="#10b981" />}
                      {isAnswerSubmitted && isSelected && !opt.correct && <XCircle size={18} color="#ef4444" />}
                    </button>
                  );
                })}
              </div>

              {/* Scientific Explanation Box (Visible post submission) */}
              {isAnswerSubmitted && (
                <div
                  style={{
                    padding: '1.25rem',
                    borderRadius: '12px',
                    background: 'rgba(0, 242, 254, 0.08)',
                    border: '1px solid rgba(0, 242, 254, 0.25)',
                    marginBottom: '2rem',
                    animation: 'fadeIn 0.25s ease-out',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <HelpCircle size={16} color="#00f2fe" />
                    <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-primary)', textTransform: 'uppercase', fontWeight: 700 }}>
                      Scientific Justification & Context:
                    </span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#e2e8f0', lineHeight: '1.6' }}>
                    {currentQ.explanation}
                  </p>
                </div>
              )}

              {/* Bottom Action Buttons */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                {!isAnswerSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedOptionIndex === null}
                    className="btn btn-primary"
                    style={{
                      opacity: selectedOptionIndex === null ? 0.5 : 1,
                      cursor: selectedOptionIndex === null ? 'not-allowed' : 'pointer',
                    }}
                  >
                    <span>Submit Verification</span>
                  </button>
                ) : (
                  <button onClick={handleNextQuestion} className="btn btn-primary" style={{ gap: '0.5rem' }}>
                    <span>{currentQuestionIndex < forensicQuizData.length - 1 ? 'Next Question' : 'View Final Results'}</span>
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Quiz Completed View */
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: 'rgba(0, 242, 254, 0.15)',
                  border: '2px solid var(--cyan-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  boxShadow: '0 0 30px rgba(0, 242, 254, 0.35)',
                }}
              >
                <Award size={36} color="#00f2fe" />
              </div>

              <div className="section-tag" style={{ marginBottom: '1rem' }}>
                ASSESSMENT-3 EVALUATION COMPLETE
              </div>

              <h3 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                Your Score: <span style={{ color: 'var(--cyan-primary)' }}>{score}</span> / {forensicQuizData.length}
              </h3>

              <div
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '999px',
                  background: 'rgba(0, 242, 254, 0.12)',
                  border: `1px solid ${getRankBadge(score, forensicQuizData.length).color}`,
                  color: getRankBadge(score, forensicQuizData.length).color,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  marginBottom: '1.25rem',
                }}
              >
                Rank: {getRankBadge(score, forensicQuizData.length).title}
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '520px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
                {getRankBadge(score, forensicQuizData.length).desc}
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={handleRestartQuiz} className="btn btn-primary" style={{ gap: '0.5rem' }}>
                  <RotateCcw size={16} />
                  <span>Retake Assessment Quiz</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

