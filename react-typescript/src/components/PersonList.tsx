type PersonListProps = {
    names: {
        first: string
        last: string
    }[]
}
const PersonList = ({ names }:PersonListProps) => {
  return (
    <div className="space-y-5">
          {names.map(name => (
              <h2 className="text-3xl font-bold">{name.first} { name.last}</h2>
      ))}
    </div>
  )
}

export default PersonList
