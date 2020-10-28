import { Component } from 'react';
import './App.css';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentPage: 1,
      colorId: 0
    }

    this.updateColorId = this.updateColorId.bind(this)
    this.updatePage = this.updatePage.bind(this)
  }

  updateColorId(id){
    this.setState({ ...this.state, colorId: id })
  }

  updatePage(page){
    this.setState({ ...this.state, currentPage: page })
  }

  render() {
    let { currentPage, colorId } = this.state

    console.log(currentPage)

    return (
      <div className="App">
        {
        currentPage === 1
        ?
        <PageOne updatePage={this.updatePage} />
        :
        <PageTwo updatePage={this.updatePage} updateColorId={this.updateColorId} colorId={colorId} />
        }
      </div>
    );
  }
}

export default App;
