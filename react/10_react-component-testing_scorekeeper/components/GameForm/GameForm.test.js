import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";
import Button from "../Button";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm />);
  const formButton = screen.getAllByRole("button");
  const formInputs = screen.getAllByRole("textbox");

  expect(formInputs).toHaveLength(2);
  expect(formButton).toHaveLength(1);
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);
  const form = screen.getByRole("form", { name: "Create a new game" });

  expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const mockHandleSubmit = jest.fn();
  const user = userEvent.setup();

  render(<GameForm onCreateGame={mockHandleSubmit} />);
  const button = screen.getByRole("button");
  const textInputs = screen.getAllByRole("textbox");
  const nameOfGame = textInputs[0];
  const playerNames = textInputs[1];
  await user.type(nameOfGame, "Dominoes");
  await user.type(playerNames, "bob, joe");

  await user.click(button);

  expect(mockHandleSubmit).toHaveBeenCalledWith({ nameOfGame: "Dominoes", playerNames: ["bob", "joe"]});
});

test("does not submit form if one input field is left empty", async () => {
  const mockHandleSubmit = jest.fn();
  const user = userEvent.setup();

  render(<GameForm onCreateGame={mockHandleSubmit} />);
  const button = screen.getByRole("button");
  const textInputs = screen.getAllByRole("textbox");
  const gameInput = textInputs[0];
  const userInput = textInputs[1];

  await user.click(button);

  expect(mockHandleSubmit).not.toHaveBeenCalled();
});
