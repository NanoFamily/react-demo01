const MENUS = [
  'コーンスープ',
  'シーザーサラダ',
  'ガーリックトースト',
  'ジェノベーゼ',
  'カルボナーラ',
  'ペペロンチーノ',
  'リブステーキ'
]
export const List = () => {
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
