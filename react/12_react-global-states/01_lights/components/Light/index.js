import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ name, isOn, id, onToggle }) {
  return (
    <LightButton
      type="button"
      onClick={() => {
        onToggle(id);
        // console.log(id)
      }}
      isOn={isOn}
    >
      <Icon isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "Off" : "On"}</State>
      </Text>
    </LightButton>
  );
}
