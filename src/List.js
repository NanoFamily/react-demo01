
export const List = ({ menus }) => {
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
