import React, { useState } from 'react';
import './Form.css';

function Form(props) {
  // ------------------------------------------------ useState
  const [form, setForm] = useState({ sName: '', sCourse: '', sGrade: '' });

  // ------------------------------------------------ submitHandler
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log({name:form.sName, course:form.sCourse, grade:form.sGrade});

    props.onAdded({
      name: form.sName,
      course: form.sCourse,
      grade: form.sGrade,
    });
  };

  // ------------------------------------------------ namehandler
  const namehandler = (e) => {
    setForm((prevState) => {
      return { ...prevState, sName: e.target.value };
    });
  };
  // ------------------------------------------------ courseHandler
  const courseHandler = (e) => {
    setForm((prevState) => {
      return { ...prevState, sCourse: e.target.value };
    });
  };

  // ------------------------------------------------ gradeHandler
  const gradeHandler = (e) => {
    setForm((prevState) => {
      return { ...prevState, sGrade: e.target.value };
    });
  };

  // ------------------------------------------------
  return (
    <form onSubmit={submitHandler}>
      <input
        className="input"
        type="text"
        value={form.sName}
        onChange={namehandler}
      />

      <select defaultValue="" onChange={courseHandler} className="input">
        <option value="" disabled>
          Select Course
        </option>
        <option value={form.sCourse == 'BSC' ? 'BSC' : ''}>BSC</option>
        <option value={form.sCourse == 'BCA' ? 'BCA' : ''}>BCA</option>
        <option value={form.sCourse == 'MCA' ? 'MCA' : ''}>MCA</option>
      </select>

      <div className="inpput">
        <label htmlFor="">Grade : </label>
        <input
          type="radio"
          value="A+"
          name="grade"
          onChange={gradeHandler}
          checked={form.sGrade == 'A+' ? 'checked' : ''}
        />
        A+
        <input
          type="radio"
          value="B+"
          name="grade"
          onChange={gradeHandler}
          checked={form.sGrade == 'B+' ? 'checked' : ''}
        />
        B+
        <input
          type="radio"
          value="C+"
          name="grade"
          onChange={gradeHandler}
          checked={form.sGrade == 'C+' ? 'checked' : ''}
        />
        C+
      </div>

      <input className="input btn" type="submit" value="Add" />
    </form>
  );
}
export default Form;
