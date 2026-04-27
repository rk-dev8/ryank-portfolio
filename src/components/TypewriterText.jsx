import { useState, useEffect } from 'react';

const phrases = [
  'Developer',
  'Creator',
  'Problem Solver',
  'Full-Stack Engineer',
  'Cycling Enthusiast',
];

export default function TypewriterText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
    } else if (!deleting && displayed.length === current.length) {
      // Pause before deleting
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && displayed.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 45);
    } else if (deleting && displayed.length === 0) {
      // Move to next phrase after a short delay
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIndex]);

  return (
    <span className="typewriter-text">
      Hi, I&apos;m Ryan —&nbsp;
      <span className="typewriter-phrase">{displayed}</span>
      <span className="typewriter-cursor">|</span>
    </span>
  );
}
