import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(<Player name="bob" score={0} />);
  const buttons = screen.getAllByRole("button");
  const nameLabel = screen.getByText("bob");

  expect(buttons).toHaveLength(2);
  expect(nameLabel).toBeInTheDocument();
});

test("calls callbacks when increasing or decreasing score", async () => {
  const handleDecrease = jest.fn();
  const handleIncrease = jest.fn();

  const user = userEvent.setup();

  render(
    <Player
      name="bob"
      score={0}
      onDecreasePlayerScore={handleDecrease}
      onIncreasePlayerScore={handleIncrease}
    />
  );
  const buttons = screen.getAllByRole("button");
  const decreaseButton = buttons[0];
  const increaseButton = buttons[1];

  await user.click(increaseButton);
  await user.click(increaseButton);
  await user.click(decreaseButton);
  await user.click(decreaseButton);
  await user.click(decreaseButton);

  expect(handleIncrease).toHaveBeenCalledTimes(2);
  expect(handleDecrease).toHaveBeenCalledTimes(3);
});
