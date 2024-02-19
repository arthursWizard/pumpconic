import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Base from 'shared/Base/Base';
import Notes from 'shared/Notes/Notes';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import ActivityCard from 'shared/ActivityCard/ActivityCard';
import Button from '@mui/material/Button';
import styles from './ActivityRecorder.module.scss';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ObjectsTable from 'shared/ObjectsTable/ObjectsTable';
import { ColumnDef, RowEventType } from 'shared/ObjectsTable/RowItem/RowItem';
import ActivityFormDialog from 'shared/ActivityFormDialog/ActivityFormDialog';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function ActivityRecorder() {
  const old = {
    date: '16.01.2024.',
    sets: ['SET 1 | 10 REPS | 25 kg', 'SET 1 | 10 REPS | 25 kg', 'SET 1 | 10 REPS | 25 kg', 'SET 1 | 10 REPS | 25 kg'],
  };

  interface Bla {
    id: string;
    reps: number;
    weight: number;
  }

  const columns: ColumnDef<Bla>[] = [
    {
      name: 'SET',
      key: 'id',
    },
    {
      name: 'REPS',
      key: 'reps',
    },
    {
      name: 'WEIGHT',
      key: 'weight',
    },
  ];

  const rows = [
    { id: '1', reps: 10, weight: 50 },
    { id: '2', reps: 10, weight: 50 },
    { id: '3', reps: 10, weight: 50 },
    { id: '4', reps: 10, weight: 50 },
    { id: '5', reps: 10, weight: 50 },
    { id: '6', reps: 10, weight: 50 },
  ];

  interface Exercise {
    id: string;
    name: string;
  }

  const exercises: Exercise[] = [
    {
      id: '1',
      name: 'ex1',
    },
    {
      id: '2',
      name: 'ex2',
    },
    {
      id: '3',
      name: 'ex3',
    },
  ];

  // TODO: Implement all cases
  const handleOnAction = (id: string, eventType: RowEventType) => {
    switch (eventType) {
      case 'edit':
      case 'delete':
        console.log(id);
    }
  };

  return (
    <Base title="Exercise Name" hasBackNavigation>
      <Notes>
        <div>Some text and stuff</div>
      </Notes>
      <Accordion>
        <AccordionSummary className={styles.lastRecordTitle} expandIcon={<ExpandMoreIcon />}>
          <span>PREVIOUS ACTIVITY</span>
        </AccordionSummary>
        <AccordionDetails className={styles.lastRecordBody}>
          <ActivityCard {...old} />
          <div className={styles.lastRecordActions}>
            <Button variant="contained">Previous</Button>
            <Button variant="contained">Next</Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary className={styles.lastRecordTitle} expandIcon={<ExpandMoreIcon />}>
          <span>ADDITIONAL</span>
        </AccordionSummary>
        <AccordionDetails className={styles.additionalSettingsBody}>
          <Autocomplete
            options={exercises}
            getOptionLabel={(option: Exercise) => option.name}
            renderInput={(p) => <TextField {...p} label="Alternative Exercise" variant="standard" />}
          />
          <FormControlLabel control={<Checkbox />} label="Increase Effort" labelPlacement="end" />
        </AccordionDetails>
      </Accordion>
      <ObjectsTable
        columns={columns}
        rows={rows}
        hasFilter={false}
        EditFormDialog={ActivityFormDialog}
        onAction={handleOnAction}
      />
      <MobileStepper
        className={styles.stepper}
        variant="dots"
        steps={6}
        position="static"
        activeStep={3}
        nextButton={
          <Button size="small">
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small">
            <KeyboardArrowLeft />
          </Button>
        }
      />
    </Base>
  );
}
