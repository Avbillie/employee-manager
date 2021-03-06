import React from "react";

const styles = {
  card: {
    marginLeft: 20,
  },
};

function SearchForm(props) {
  return (
    <form className="form">
      <div className="form-group text-center">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search By First Name"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
        <button onClick={props.handleReload} style={styles.card} className="btn btn-primary mt-3">
          Reload Employees
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
