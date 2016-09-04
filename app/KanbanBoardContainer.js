import React, {Component} from 'react';
import KanbanBoard from './KanbanBoard';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
  'Content-Type': 'application/json',
  'Authorization': 'bakyeono@gmail.com'
};

class KanbanBoardContainer extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      cards: []
    };
  }

  fetchData() {
    fetch(API_URL + '/cards', {headers: API_HEADERS})
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({cards: responseData});
      })
      .catch((error) => {
        console.error('Error fetching and parsing data', error);
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  addTask(cardId, taskName) {

  }

  deleteTask(cardId, taskId, taskIndex) {

  }

  toggleTask(cardId, taskId, taskIndex) {

  }

  render() {
    return (
      <KanbanBoard cards={this.state.cards}
                   taskCallbacks={{
                     toggle: this.toggleTask.bind(this),
                     delete: this.deleteTask.bind(this),
                     add: this.addTask.bind(this)
                   }} />
    );
  }
}

export default KanbanBoardContainer;
