import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import styles from './ActivityCard.module.scss';

interface ActivityCardProps {
  alternate?: string;
  date: string;
  sets: string[];
  className?: string;
}

export default function ActivityCard({ alternate, date, sets, className }: ActivityCardProps) {
  return (
    <Card className={`${className} ${styles.cardContainer}`}>
      <CardHeader title={[date, alternate].filter(Boolean).join(' - ')} />
      <CardContent className={styles.cardContent}>
        {sets.map((set, i) => (
          <span key={i}>{set}</span>
        ))}
      </CardContent>
    </Card>
  );
}
