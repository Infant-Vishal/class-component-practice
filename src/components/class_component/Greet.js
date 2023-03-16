import React, { Component } from "react";

class Greet extends Component {
  constructor() {
    super();
    this.state = {
      name: "Naruto",
      fatherName: "Minato",
      motherName: "Kushina",
      teacher: "Jiraya the gallant",
    };
  }
  changeTeacher = (props) => {
    this.setState({ teacher: "Kakashi" });
  };
  render() {
    return (
      <div>
        <h5>Good morning {this.state.name}</h5>
        <h6>Your father name is {this.state.fatherName}</h6>
        <h6>Your teacher name is {this.state.teacher}</h6>
        <button onClick={this.changeTeacher}>Change teacher</button>
      </div>
    );
  }
}

export default Greet;
