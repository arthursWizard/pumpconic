import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Base from 'shared/Base/Base';
import Notes from 'shared/Notes/Notes';
import styles from './Exercise.module.scss';

interface ActivityCardsProps {
  activities: { id: string; alternate?: string; date: string; sets: string[] }[];
}

function ActivityCards({ activities }: ActivityCardsProps) {
  return (
    <>
      {activities.map((c, i) => (
        <Card key={c.id} className={styles.cardContainer}>
          {i === 0 && <Divider />}
          <CardHeader title={[c.date, c.alternate ?? ''].join(' - ')} />
          <CardContent className={styles.cardContent}>
            <span>SET 1 | 10 REPS | 25 kg</span>
            <span>SET 1 | 10 REPS | 25 kg</span>
            <span>SET 1 | 10 REPS | 25 kg</span>
            <span>SET 1 | 10 REPS | 25 kg</span>
          </CardContent>
          <Divider />
        </Card>
      ))}
    </>
  );
}

export default function Exercise() {
  const content = [
    {
      id: '1',
      date: '16.01.2024.',
      alternate: 'Some alternate',
      sets: [
        'SET 1 | 10 REPS | 25 kg',
        'SET 1 | 10 REPS | 25 kg',
        'SET 1 | 10 REPS | 25 kg',
        'SET 1 | 10 REPS | 25 kg',
      ],
    },
    {
      id: '2',
      date: '16.01.2024.',
      sets: [
        'SET 1 | 10 REPS | 25 kg',
        'SET 1 | 10 REPS | 25 kg',
        'SET 1 | 10 REPS | 25 kg',
        'SET 1 | 10 REPS | 25 kg',
      ],
    },
    {
      id: '3',
      date: '16.01.2024.',
      sets: [
        'SET 1 | 10 REPS | 25 kg',
        'SET 1 | 10 REPS | 25 kg',
        'SET 1 | 10 REPS | 25 kg',
        'SET 1 | 10 REPS | 25 kg',
      ],
    },
    {
      id: '4',
      date: '16.01.2024.',
      alternate: 'Some alternate',
      sets: [
        'SET 1 | 10 REPS | 25 kg',
        'SET 1 | 10 REPS | 25 kg',
        'SET 1 | 10 REPS | 25 kg',
        'SET 1 | 10 REPS | 25 kg',
      ],
    },
  ];
  return (
    <Base title="Exercise name" hasBackNavigation>
      <Notes>
        <div>Some Text and stuff</div>
      </Notes>
      <Base title="Activities">
        <div className={styles.actionKeyContainer}>
          <Button variant="contained">Clear Activities</Button>
        </div>
        <div className={styles.activityItems}>
          <ActivityCards activities={content} />
        </div>
      </Base>
    </Base>
  );
}
