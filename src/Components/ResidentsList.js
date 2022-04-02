import React from "react";

function ResidentsList(props) {
  return (
    <div className="pa-10 mt-10 w-75">
      <div className="font-weight-bold text-center">Residents List</div>
      <ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
        {props.item[0].map((alfa, beta) => {
          return (
            <div key={beta}>
              <li className="slide-up-fade-in">{alfa}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ResidentsList;
