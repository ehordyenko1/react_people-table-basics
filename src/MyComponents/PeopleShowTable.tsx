import { Person } from '../types';

interface Props {
  selectedPerson: Person | null;
  people: Person[];
}

const PeopleShowTable = ({ selectedPerson, people }: Props) => {
  return (
    <table className="table is-striped is-hoverable is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>
      <tbody>
        {people.map(p => (
          <tr
            key={p.slug}
            className={p === selectedPerson ? 'has-background-warning' : ''}
          >
            <td>{p.name}</td>
            <td>{p.sex}</td>
            <td>{p.born}</td>
            <td>{p.died}</td>
            <td>{p.motherName}</td>
            <td>{p.fatherName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PeopleShowTable;
