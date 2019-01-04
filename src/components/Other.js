import React, { Component } from "react";

export default class Other extends Component {
  render() {
    return (
      <div>
        Other.
        <h2>match.path:</h2>
        <p>{this.props.match.path}</p>
        <h2>One to Many</h2>
        <p>
          {" "}
          In SQL, relationships between tables are defined by Primary Keys and
          Foreign Keys. These create a link between two tables. Each table has a
          primary key which can be referenced in another table as a foreign key.
          A One to many relationship is created when a row from one table can
          have many matching rows in another table, using a primary and foreign
          key relationship.
        </p>
        <h3>Example: A user can have multiple orders</h3>
      </div>
    );
  }
}
