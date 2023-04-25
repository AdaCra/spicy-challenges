import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  lightSum,
  toggleAllOff,
  toggleAllOn,
  lightsTotal,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        lightSum={lightSum}
        toggleAllOff={toggleAllOff}
        toggleAllOn={toggleAllOn}
        lightsTotal={lightsTotal}
      />
      <p>
        {lightSum === 0
          ? "All lights have been turned OFF"
          : lightSum === lightsTotal
          ? "All lights have been turned ON"
          : "This operation has not been completed"}
      </p>
    </>
  );
}

// (num > 0) ? "Positive number" : (num < 0) ? "Negative number" : "Zero"
