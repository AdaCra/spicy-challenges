import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1999,
      name: "🍇 Grape",
      color: "purple",
    },
    {
      id: 1865,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 1542,
      name: "🍐 Pear",
      color: "green",
    },
    {
      id: 1295,
      name: "🍎 Apple",
      color: "red",
    },
  ];
  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} fruit={fruit} />
      ))}
    </div>
  );
}
