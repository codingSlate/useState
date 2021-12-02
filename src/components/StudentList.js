import React from 'react';

function StudentList(props) {
  console.log("list display", props.studList);

  return (
    <>
      <ul>
        {props.studList.map((s, index) => {
          return (
            <li key={index}>
              {s.name}
              {s.course}
              {s.grade}
            </li>
          );
        })}
      </ul>
      <p>Text here</p>
    </>
  );
}
export default StudentList;
