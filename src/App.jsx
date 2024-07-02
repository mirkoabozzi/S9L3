import { Component } from "react";
import "./App.css";
import AllTheBooks from "./components/AllTheBooks";
import BookList from "./components/BookList";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import SingleBook from "./components/SingleBook";
import Welcome from "./components/Welcome";
import fantasyBooks from "./data/fantasy.json";
import historyBooks from "./data/history.json";
import horrorBooks from "./data/horror.json";
import romanceBooks from "./data/romance.json";
import scifiBookss from "./data/scifi.json";
// console.log(fantasyBooks);

class App extends Component {
  state = {
    categorySelected: scifiBookss,
  };

  selectCategory = (newCategory) => {
    this.setState({ categorySelected: newCategory });
  };

  render() {
    return (
      <div className="App">
        <MyNav selectCategory={this.selectCategory} />
        <Welcome />
        {/* <AllTheBooks /> */}

        <BookList books={this.state.categorySelected} />

        {/* <SingleBook asin={fantasyBooks[1].asin} img={fantasyBooks[1].img} title={fantasyBooks[1].title} price={fantasyBooks[1].price} /> */}

        <MyFooter />
      </div>
    );
  }
}

export default App;
