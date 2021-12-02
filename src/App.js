import React, { useState } from 'react';
import './style.css';
import Form from './components/Form';
import StudentList from './components/StudentList';

export default function App() {
  const [studList, setStudList] = useState([]);
  // const studList = [{ name: 'Kiran' }, { name: 'Robin' }];

  const onAddedHandler = (data) => {
    // console.log(data);
    setStudList((prevState) => {
      return [data, ...prevState];
    });
  };

  return (
    <div>
      <h2>Add Student Record</h2>
      <Form onAdded={onAddedHandler} />

      {studList == 0 && <p>No Record Available</p>}
      <StudentList studList={studList} />
    </div>
  );
}
