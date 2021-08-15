import { useState } from 'react';
import { List } from './List';
import { Form } from './Form';
import { MENUS } from './const/menus';

function App() {
  const [tab, setTab] = useState('list');
  const [menus, setMenus] = useState(MENUS);

  const addMenu = (menu) => {
    setMenus([...menus, menu]);
    setTab('list');
  }

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab('list')}>リスト</li>
          <li onClick={() => setTab('form')}>フォーム</li>
        </ul>
      </header>
      <hr/>
      {
        tab === 'list' ? <List menus={menus} /> : <Form onAddMenu={addMenu} />
      }
    </div>
  );
}

export default App;
