import React, { useState } from "react";
import { STUDENTS } from "../studentList";

// DO NOT CHANGE THIS FUNCTION, IT RETURNS TRUE OR FALSE ACCORDING TO GIVEN DATES
// joiningDate COMES FROM input-date, validityDate COMES FROM studentList,
function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split("-");
  const [yyyy, mm, dd] = validityDate.split("-");
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return maxValid >= selected && maxValid >= today;
}

let part= "";
let studentCheckList = {
  students: STUDENTS,
  name: [],
  validityDate: [],
  partName: " ",
};

const joiningDateEvent = (e) => {
  
part = e.target.value;
};

const studentsEvent = (e) => {
  studentCheckList.partName = e.target.value;
};

function Search(props) {
  const buttonEvent = () => {
    for (let index = 0; index < studentCheckList.students.length; index++) {
      if ((studentCheckList.students[index].name).toLowerCase()===( studentCheckList.partName).toLowerCase()) {
        if (!studentCheckList.name.includes(studentCheckList.students[index].name)) {
          if (
            checkValidity(part,studentCheckList.students[index].validityDate)
             ) {
            studentCheckList.name.push(studentCheckList.students[index].name);
            props.setState([studentCheckList.name]);
            props.errMessageFunc(" ");
            break;
          } else {
            props.errMessageFunc(`Sorry  ${studentCheckList.partName}'s validity has expired! `);
            break;
          }
        } else {
          props.errMessageFunc(" ");
          break;
        }
      } else {
        props.errMessageFunc(`Sorry  ${studentCheckList.partName} is not a verified student!! `);
      }
    }
  };

  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <form action="/">
        <label htmlFor="studentName">
          Student Name:
          <div>
            <input
              onChange={(e) => {
                studentsEvent(e);
              }}
              id="studentName"
              data-testid="studentName"
              type="text"
             
              className="mr-30 mt-10"
            />
          </div>
        </label>
        <label htmlFor="joiningDate">
          Joining Date:
          <div>
            <input
              onChange={(e) => {
                joiningDateEvent(e);
              }}
              id="joiningDate"
              data-testid="joiningDate"
              type="date"
              className="mr-30 mt-10"
            />
          </div>
        </label>
        <button
          onClick={() => {
            buttonEvent();
          }}
          type="reset"
          data-testid="addBtn"
          className="small mb-0"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Search;
