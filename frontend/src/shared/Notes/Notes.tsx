import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { ReactNode } from 'react';
import styles from './Notes.module.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';

interface NotesProps {
  children: ReactNode;
}

export default function Notes({ children }: NotesProps) {
  return (
    <Accordion className={styles.notes}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <span className={styles.notesTitle}>NOTES</span>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}
