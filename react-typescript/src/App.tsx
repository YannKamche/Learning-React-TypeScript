import Greet from "./components/Greet"
import Person from "./components/Person";
import PersonList from "./components/PersonList";

const App = () => {
  const name = {
    first: "Peter",
    last: "Jones"

  }
  const nameList = [
    {
      first: "Peter",
      last: "Jones"
    },
    {
      first: "Marie",
      last: "Janes"
    }
  ]
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-300 gap-3">
      <Greet name="TypeScript" message={20} isLoggedIn={true} />
      <Person name={name} />
      <PersonList names = { nameList} />
    </div>
  );
}

export default App
