import React from 'react';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  submitForm(event) {
    event.preventDefault();
    this.props.onAddMenu(this.state.text);
  }
  render() {
    const { text } = this.state;

    return (
    <div>
      <h4>メニューを追加</h4>
      <form onSubmit={(e) => this.submitForm(e)}>
        <div>
          <input 
            type="text" 
            value={text} 
            onChange={(e) => this.setState({text: e.target.value})}
          />
        </div>
      </form>
    </div>
    )
  }
}
