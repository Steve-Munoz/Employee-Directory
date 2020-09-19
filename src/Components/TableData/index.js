import React, { Component } from "react";
import employees from "./data.json";
import { Table, Form, FormControl, Button } from "react-bootstrap";
// import axios from "axios";
// import RandomUserAPI from "../utils/utils";

//styling ↓
const pStyle = { marginLeft: "20px" };
const tableStyle = { marginLeft: "20px", marginRight: "20px" };
const buttonCss = {
  backgroundColor: "navy",
  color: "white",
};

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
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search By First Name"
            className="mr-sm-2"
            onChange={(event) => this.searchName(event)}
            style={pStyle}
          />
          <Button style={buttonCss} onClick={this.sortByFirstName}>
            Search
          </Button>
        </Form>
        <Table
          striped
          bordered
          hover
          responsive="sm"
          responsive="md"
          responsive="lg"
          responsive="xl"
          size="sm"
          borderless
          style={tableStyle}
        >
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          {this.state.employees.map((employee) => {
            const date = employee.dob.date;
            return (
              <tbody>
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
              </tbody>
            );
          })}
        </Table>
      </div>
    );
  }
}
