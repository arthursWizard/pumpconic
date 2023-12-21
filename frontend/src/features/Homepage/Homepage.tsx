import Base from 'shared/Base/Base';
import ObjectsTable, { ColumnDef } from 'shared/ObjectsTable/ObjectsTable';

interface Bla {
  id: string;
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
  { id: '1', name: 'program 1', create_date: '20.12.2023', label: 'bla' },
  { id: '2', name: 'program 2', create_date: '20.12.2023', label: 'bla' },
  { id: '3', name: 'program 3', create_date: '20.12.2023', label: 'bla' },
  { id: '4', name: 'program 4', create_date: '20.12.2023', label: 'bla' },
  { id: '5', name: 'program 5', create_date: '20.12.2023', label: 'bla' },
];

export default function Homepage() {
  return (
    <Base title="Programs">
      <ObjectsTable columns={columns} rows={rows} hasOptionsMenu={true} />
    </Base>
  );
}
