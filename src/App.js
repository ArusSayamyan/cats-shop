import React from "react";
import "./app.scss";

class App extends React.component {
  state = {
    search: "Narek",
    cats: [
      { name: "Marvin", email: "marvin@mail.com" },
      { name: "Darvin", email: "marvin@mail.com" },
      { name: "Harry Poter", email: "marvin@mail.com" },
    ],
  };

  handleChange = (event) => {
    //? inputValue 
    const searchValue = event.target.value;
    //? inputValue set inputValue to state
    this.setState({ search: searchValue });
  };

  render() {
    const mySearchInputValue = this.state.search;
    
const filteredCatsData = this.state.cats.filter((cat) => {
  return cat.name.includes(mySearchInputValue);
});

console.log(filteredCatsData);

    return (
      <div className="app">
        <h1 className="app__header">Catty shop</h1>
        <div className="app__search">
          <div>{this.state.name}</div>

          <input
            className="app__search-input"
            type="text"
            name="search"
            placeholder="Search cats"
          />
        </div>

        <main className="app__main">
          <ul>
            {mySearchInputValue.map((cat, idx) => {
              return (
                <li className="item__header">
                  <div className="item">{cat.name}</div>
                  <div>{cat.email}</div>
                </li>
              );
            })}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
