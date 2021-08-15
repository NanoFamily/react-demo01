import React from 'react';

export class List extends React.Component {
  render() {
    const { menus } = this.props;
    return (
      <div>
        {
          menus.map((menu, index) => {
            return <div key={index}>{menu}</div>
          })
        }
      </div>
    )
  }
}
