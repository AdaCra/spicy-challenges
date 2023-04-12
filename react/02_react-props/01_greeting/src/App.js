import "./styles.css";

export default function App() {
  return <Greeting name="Klaus" />;
}

function Greeting({ name }) {
  const isCoach = ["Klaus", "Gimena", "Jan", "Sven", "Yair", "Marcel"];

  return <h1>Hello {isCoach.includes(name) ? "Coach" : name}!!</h1>;
}
