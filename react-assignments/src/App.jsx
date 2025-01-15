import "./App.css";
import PersonProfile from "./PersonProfile";

function App() {
  const person = {
    name: "John",
    info: {
      age: 25,
      city: "New York",
      job: "Developer",
      hobbies: ["reading", "coding", "gaming"],
    },
  };
  return (
    <div>
      <header>
        <h1>This is React</h1>
      </header>
      <main>
        <PersonProfile {...person} />
      </main>
    </div>
  );
}

export default App;
