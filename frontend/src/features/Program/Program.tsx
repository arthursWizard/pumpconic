import { useNavigate, useParams } from 'react-router-dom';
import './Program.scss';
import Base from 'shared/Base/Base';
import Notes from 'shared/Notes/Notes';
import ObjectsTable, { ColumnDef, EventType } from 'shared/ObjectsTable/ObjectsTable';

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
    name: 'CREATE DATE',
    key: 'create_date',
  },
  {
    name: 'LABEL',
    key: 'label',
  },
];

const rows = [
  { id: '1', navigation: '/training/1', name: 'training 1', create_date: '20.12.2023', label: 'bla' },
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
export default function Program() {
  const { programId } = useParams();
  const navigate = useNavigate();

  // TODO: Implement all cases
  const handleOnAction = (id: string, eventType: EventType) => {
    switch (eventType) {
      case 'navigate':
        navigate(`/training/${id}`);
        break;
      case 'edit':
      case 'delete':
        console.log(id);
    }
  };

  return (
    <Base title="Program name">
      <Notes>
        <div>Some Text and stuff</div>
      </Notes>
      <Base title="Trainings">
        <ObjectsTable columns={columns} rows={rows} hasOptionsMenu={true} onAction={handleOnAction} />
      </Base>
    </Base>
  );
}
