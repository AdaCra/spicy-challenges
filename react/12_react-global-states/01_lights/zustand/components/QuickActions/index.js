import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ toggleAllOn, toggleAllOff, lightSum, lightsTotal }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          toggleAllOff();
        }}
        disabled={!lightSum && "disabled"}
        >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          toggleAllOn();
        }}
        disabled={lightSum===lightsTotal && "disabled"}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
