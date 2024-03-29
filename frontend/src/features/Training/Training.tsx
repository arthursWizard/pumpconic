import { useNavigate, useParams } from 'react-router-dom';
import Base from 'shared/Base/Base';
import Notes from 'shared/Notes/Notes';
import { ColumnDef, RowEventType } from 'shared/ObjectsTable/RowItem/RowItem';
import ObjectsTable from 'shared/ObjectsTable/ObjectsTable';
import ExerciseFormDialog from 'shared/ExerciseFormDialog/ExerciseFormDialog';

interface Bla {
  id: string;
  navigation: string;
  name: string;
  create_date: string;
  label: string;
}

const columns: ColumnDef<Bla>[] = [
  {
    name: 'NAME',
    key: 'name',
  },
  {
    name: 'LABEL',
    key: 'label',
  },
];

const rows = [
  { id: '1', navigation: '/exercise/1', name: 'exercise 1', create_date: '20.12.2023', label: 'bla' },
  { id: '2', navigation: '/training/1', name: 'training 2', create_date: '20.12.2023', label: 'bla' },
  { id: '3', navigation: '/training/1', name: 'training 3', create_date: '20.12.2023', label: 'bla' },
  { id: '4', navigation: '/training/1', name: 'training 4', create_date: '20.12.2023', label: 'bla' },
  { id: '5', navigation: '/training/1', name: 'training 5', create_date: '20.12.2023', label: 'bla' },
  { id: '6', navigation: '/training/1', name: 'training 5', create_date: '20.12.2023', label: 'bla' },
  { id: '7', navigation: '/training/1', name: 'training 5', create_date: '20.12.2023', label: 'bla' },
  { id: '8', navigation: '/training/1', name: 'training 5', create_date: '20.12.2023', label: 'bla' },
  { id: '9', navigation: '/training/1', name: 'training 5', create_date: '20.12.2023', label: 'bla' },
  { id: 'a', navigation: '/training/1', name: 'training 5', create_date: '20.12.2023', label: 'bla' },
  { id: 'b', navigation: '/training/1', name: 'training 5', create_date: '20.12.2023', label: 'bla' },
  { id: 'c', navigation: '/training/1', name: 'training 5', create_date: '20.12.2023', label: 'bla' },
  { id: 'd', navigation: '/training/1', name: 'training 5', create_date: '20.12.2023', label: 'bla' },
  { id: 'e', navigation: '/training/1', name: 'training 5', create_date: '20.12.2023', label: 'bla' },
  { id: 'f', navigation: '/training/1', name: 'training 5', create_date: '20.12.2023', label: 'bla' },
  { id: 'g', navigation: '/training/1', name: 'training', create_date: '20.12.2023', label: 'bla' },
];
export default function Training() {
  const { trainingId } = useParams();
  const navigate = useNavigate();

  // TODO: Implement all cases
  const handleOnAction = (id: string, eventType: RowEventType) => {
    switch (eventType) {
      case 'navigate':
        navigate(`/exercise/${id}`);
        break;
      case 'edit':
      case 'delete':
        console.log(id);
    }
  };

  return (
    <Base title="Training name" hasBackNavigation>
      <Notes>
        <div>Some Text and stuff</div>
      </Notes>
      <Base title="Exercises">
        <ObjectsTable columns={columns} rows={rows} EditFormDialog={ExerciseFormDialog} onAction={handleOnAction} />
      </Base>
    </Base>
  );
}
