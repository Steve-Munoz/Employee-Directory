// import axios from "axios";
// import RandomUserAPI from "../utils/utils";

// export default class Data extends Component{
//     state = {
//         users: [{}],
//         order: "descend",
//         filteredUsers: [{}]
//     }

//     headings = [
//         { name: "Image", width: "10%"},
//         { name: "Name", width: "10%"},
//         { name: "Phone", width: "20%"},
//         { name: "Email", width: "20%"}

//     ]
// }

import React, { Component } from "react";
import employees from "./data.json";
// import axios from "axios";
// import RandomUserAPI from "../utils/utils";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: employees,
    };
    this.sortByFirstName = this.sortByFirstName.bind(this);
  }

  searchName = function (event) {
    console.log(event.target.value);
    let searchInfo = event.target.value;
    let firstName = employees.filter(
      (el) =>
        el.name.first.toLowerCase().indexOf(searchInfo.toLowerCase()) !== -1
    );
    this.setState({ employees: firstName });
  };

  sortByFirstName = function () {
    // sort by name
    let sortEmployees = employees.sort(function (a, b) {
      let nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    console.log(sortEmployees);

    this.setState({ employees: sortEmployees });
  };
  //   componentDidMount() {
  //     axios
  //       .get(`https://randomuser.me/api/?results=200&nat=us`)
  //       .then((result) => {
  //         console.log(result);
  //         const employees = result.results;
  //         console.log(employees);
  //         this.setState({ employees });
  //       });
  //   }
  render() {
    return (
      <div>
        <input
          placeholder="Search by first name"
          onChange={(event) => this.searchName(event)}
        />
        <button onClick={this.sortByFirstName}>Sort by first name</button>
        <table style={{ width: "100%" }}>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
          {this.state.employees.map((employee) => {
            const date = employee.dob.date;
            return (
              <tr>
                <td>
                  <img src={employee.picture.thumbnail} />
                </td>
                <td>
                  {employee.name.first} {employee.name.last}
                </td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{date.substring(0, 10)}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
