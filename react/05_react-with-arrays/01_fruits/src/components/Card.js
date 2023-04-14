import "./Card.css";

export default function Card({ fruit }) {
  return (
    <p className="card" style={{ backgroundColor: fruit.color }}>
      {fruit.name}
    </p>
  );
}
