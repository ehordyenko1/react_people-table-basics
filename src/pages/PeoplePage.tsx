import { useEffect, useState } from 'react';
import { Loader } from '../components/Loader/Loader';
import PeopleShowTable from '../MyComponents/PeopleShowTable';

export const PeoplePage = () => {
  const [people, setPeople] = useState([]); // массив по умолчанию
  const [loading, setLoading] = useState(true); // состояние загрузки

  useEffect(() => {
    fetch('/api/people')
      .then(res => res.json())
      .then(data => setPeople(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (people.length === 0) {
    return <p>There are no people on the server</p>;
  }

  return <PeopleShowTable people={people} selectedPerson={null} />;
};
