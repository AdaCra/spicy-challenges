import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      name={"testName"}
      labelText={"testLabel"}
      placeholder={"testPlaceholder"}
    />
  );

  const labelName = screen.getByLabelText("testLabel");

  expect(labelName).toBeInTheDocument();
  expect(labelName).toHaveAttribute("placeholder", "testPlaceholder");
});

test("calls callback on every user input", async () => {
  const mockHandleChange = jest.fn();
  const user = userEvent.setup();

  render(
    <Input
      onChange={mockHandleChange}
      name={"testName"}
      labelText={"testLabel"}
      placeholder={"testPlaceholder"}
    />
  );
  const inputElement = screen.getByRole("textbox", { name: "testLabel" });
    const inputValue = "testValue"
  await user.type(inputElement, inputValue)

  expect(mockHandleChange).toHaveBeenCalledTimes(inputValue.length)
  expect(mockHandleChange).toHaveBeenCalledWith(expect.any(Object))
});
