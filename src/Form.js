import { useState } from 'react';

export const Form = ({ onAddMenu }) => {
  const [text, setText] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    onAddMenu(text);
  }

  return (
  <div>
    <h4>新しいメニューの追加</h4>
    <form onSubmit={submitForm}>
      <div>
        <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <button>追加</button>
      </div>
    </form>
  </div>
  )
}
