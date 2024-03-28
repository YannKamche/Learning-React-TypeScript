import Greet from "./components/Greet"

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-300 gap-3">
      <Greet name="TypeScript"/>
    </div>
  );
}

export default App
