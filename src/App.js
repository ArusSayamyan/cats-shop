import './app.scss';

class App extends React.component {
  state = {
    search: "Narek",
    cats: ["Marvin", "Darvin", "Harry Poter"]
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({search: value});
  };


  render() {

    console.log(this.state.cats)
    return (
    <div className="app">
      <h1 className = "app__header">Catty shop</h1>
     <div className="app__search">
       <div>{this.state.name}</div>

       <input className="app__search-input" type="text" name="search" placeholder="Search cats"/>
    </div>

    <main className="app__main">
         {this.state.cats.map(cat =>)}
    </main>
    </div>
  
    
  );
}
}

export default App;
