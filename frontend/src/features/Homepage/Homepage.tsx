import { useNavigate } from 'react-router-dom';
import Base from 'shared/Base/Base';
import ObjectsTable, { ColumnDef, EventType } from 'shared/ObjectsTable/ObjectsTable';
import ProgramFormDialog from 'shared/ProgramFormDialog/ProgramFormDialog';

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
  {
    id: '1',
    navigation: '/program/1',
    name: 'normal word length and a little bit more',
    create_date: '20.12.2023',
    label: 'bla',
  },
  { id: '2', navigation: '/program/1', name: 'program 2', create_date: '20.12.2023', label: 'bla' },
  { id: '3', navigation: '/program/1', name: 'program 3', create_date: '20.12.2023', label: 'bla' },
  { id: '4', navigation: '/program/1', name: 'program 4', create_date: '20.12.2023', label: 'bla' },
  { id: '5', navigation: '/program/1', name: 'program 5', create_date: '20.12.2023', label: 'bla' },
  { id: '6', navigation: '/program/1', name: 'program 5', create_date: '20.12.2023', label: 'bla' },
  { id: '7', navigation: '/program/1', name: 'program 5', create_date: '20.12.2023', label: 'bla' },
  { id: '8', navigation: '/program/1', name: 'program 5', create_date: '20.12.2023', label: 'bla' },
  { id: '9', navigation: '/program/1', name: 'program 5', create_date: '20.12.2023', label: 'bla' },
  { id: 'a', navigation: '/program/1', name: 'program 5', create_date: '20.12.2023', label: 'bla' },
  { id: 'b', navigation: '/program/1', name: 'program 5', create_date: '20.12.2023', label: 'bla' },
  { id: 'c', navigation: '/program/1', name: 'program 5', create_date: '20.12.2023', label: 'bla' },
  { id: 'd', navigation: '/program/1', name: 'program 5', create_date: '20.12.2023', label: 'bla' },
  { id: 'e', navigation: '/program/1', name: 'program 5', create_date: '20.12.2023', label: 'bla' },
  { id: 'f', navigation: '/program/1', name: 'program 5', create_date: '20.12.2023', label: 'bla' },
  { id: 'g', navigation: '/program/1', name: 'program 5', create_date: '20.12.2023', label: 'bla' },
  { id: 'h', navigation: '/program/1', name: 'program 7', create_date: '20.12.2023', label: 'bla' },
];

export default function Homepage() {
  const navigate = useNavigate();

  // TODO: Implement all cases
  const handleOnAction = (id: string, eventType: EventType) => {
    switch (eventType) {
      case 'navigate':
        navigate(`/program/${id}`);
        break;
      case 'edit':
      case 'delete':
        console.log(id);
    }
  };
  return (
    <Base title="Programs">
      <ObjectsTable
        columns={columns}
        rows={rows}
        hasOptionsMenu={true}
        EditFormDialog={ProgramFormDialog}
        onAction={handleOnAction}
      />
    </Base>
  );
}
