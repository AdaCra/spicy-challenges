import Link from "../components/Link";

export default function HomePage({ lightSum }) {
  return (
    <div>
      <h1>Home</h1>
      <p>
        {lightSum === 1 ? "Only" : "There are"}&nbsp;
        {lightSum === 0 ? "no" : lightSum}&nbsp;
        {lightSum === 1 ? "light is" : "lights"} on.
      </p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
