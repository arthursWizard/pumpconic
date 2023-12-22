import { ReactNode } from 'react';
import './Notes.scss';

interface NotesProps {
  children: ReactNode;
}

export default function Notes({ children }: NotesProps) {
  return (
    <div className="notes">
      <span className="notes-title">NOTES</span>
      {children}
    </div>
  );
}
