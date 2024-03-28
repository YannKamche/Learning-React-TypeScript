import Greet from "./components/Greet"
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

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
      {/* <Greet name="TypeScript" message={20} isLoggedIn={true} />
      <Person name={name} />
      <PersonList names={nameList} />
      <Status status= {2} /> */}
      <Oscar>
        <Heading />
      </Oscar>
    </div>
  );
}

export default App
