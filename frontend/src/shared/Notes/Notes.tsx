import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { ReactNode } from 'react';
import './Notes.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';

interface NotesProps {
  children: ReactNode;
}

export default function Notes({ children }: NotesProps) {
  return (
    <Accordion className="notes">
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <span className="notes-title">NOTES</span>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}
