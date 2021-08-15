import React from 'react';

const MENUS = [
  'コーンスープ',
  'シーザーサラダ',
  'ガーリックトースト',
  'ジェノベーゼ',
  'カルボナーラ',
  'ペペロンチーノ',
  'リブステーキ'
]

export class List extends React.Component {
  render() {
    return (
      <div>
        {
          MENUS.map((menu, index) => {
            return <div key={index}>{menu}</div>
          })
        }
      </div>
    )
  }
}
