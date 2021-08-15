import React from 'react';
import { List } from './List';
import { Form } from './Form';
import { MENUS } from './const/menus';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'list',
      menus: MENUS,
    }
  }
  addMenu(menu) {
    this.setState({
      tab: 'list',
      menus:[...this.state.menus, menu]
    });
  }

  render() {
    const { tab, menus } = this.state;
    return (
      <div>
        <header>
          <ul>
            <li onClick={() => this.setState({ tab: 'list' })}>
              リスト
            </li>
            <li onClick={() => this.setState({ tab: 'form' })}>
              フォーム
            </li>
          </ul>
        </header>
        <hr />
        {
          tab === 'list' ? <List menus={menus} /> : <Form onAddMenu={(menu) => this.addMenu(menu)} />
        }
      </div>
    )
  }
}

export default App;
