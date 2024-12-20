//import React from 'react'

export default function EmpSal() {
    const empData = [
      { name: "TajMahal", location: "Agradelhi", counrty: "india",url:"https://en.wikipedia.org/wiki/Taj_Mahal#/media/File:Taj_Mahal_(Edited).jpeghttps://en.wikipedia.org/wiki/Taj_Mahal#/media/File:Taj_Mahal_(Edited).jpeg"},
      { name: "", email: "", company: "", salary:  },
      { name: "Ramya", email: "ramya@gmail.com", company: "InfoSys", salary: 25000 },
      { name: "John", email: "john@gmail.com", company: "Wipro", salary: 65000 },
      { name: "Abdul", email: "abdul@gmail.com", company: "TCS", salary: 55000 },
    
    ];
  
    // () => ()
  
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">location</th>
              <th scope="col">country</th>
              <th scope="col">url</th>
            </tr>
          </thead>
          <tbody>
            {empData.map(
                (x)=>( 
                <tr>
                    <td>{x.name}</td>
                    <td>{x.email}</td>
                    <td>{x.company}</td>
                    <td>{x.salary}</td>
                  </tr>
                 )
            )}
           
          </tbody>
        </table>
      </div>
    );
  }
