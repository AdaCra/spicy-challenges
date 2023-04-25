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

  // Push Light Switches
  function onToggle(lightId) {
    setLights((lights) =>
      lights.map((light) => {
        if (light.id === lightId) {
          return { ...light, isOn: !light.isOn };
        }
        return light;
      })
    );
  }
  // Number of Lights
  const lightsTotal = lights.length;

  // Counting Burning Lights
  const lightSum = lights.filter((light) => light.isOn).length;

  // Switch All Lights On
  function allLightsHandlerON() {
    setLights((lights) =>
      lights.map((light) => {
        return { ...light, isOn: true };
      })
    );
  }

  // Switch All Lights Off
  function allLightsHandlerOFF() {
    setLights((lights) =>
      lights.map((light) => {
        return { ...light, isOn: false };
      })
    );
    console.log(lightSum);
  }
  return (
    <Layout isDimmed={lightSum === 0 ? true : false}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        lightSum={lightSum}
        lightsTotal={lightsTotal}
        onToggle={onToggle}
        toggleAllOn={allLightsHandlerON}
        toggleAllOff={allLightsHandlerOFF}
      />
    </Layout>
  );
}
