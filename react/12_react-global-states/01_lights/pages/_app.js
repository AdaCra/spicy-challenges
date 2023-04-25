import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: true },
  { id: 3, name: "Bedroom", isOn: true },
  { id: 4, name: "Bathroom", isOn: true },
  { id: 5, name: "Garage", isOn: true },
  { id: 6, name: "Porch", isOn: true },
  { id: 7, name: "Garden", isOn: true },
  { id: 8, name: "Office", isOn: true },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function onToggle(lightId) {
    // console.log("on onToggleLight in APP: ", lightName);
    setLights((lights) =>
      lights.map((light) => {
        if (light.id === lightId) {
          return { ...light, isOn: !light.isOn };
        }
        return light;
      })
    );
  }
  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggle={onToggle}
      />
    </Layout>
  );
}
