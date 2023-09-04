import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "../ui"; // Import your component

describe("Button Component", () => {
  it("рендер с children", () => {
    render(<Button variable="outline">Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("дожна вызыватсья функция onClick при клике", () => {
    const onClickMock = jest.fn();
    render(
      <Button variable="outline" onClick={onClickMock}>
        Click Me
      </Button>
    );
    const button = screen.getByText("Click Me");

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("должен быть disabled когда isDisabled - true", () => {
    render(
      <Button variable="outline" isDisabled={true}>
        Click Me
      </Button>
    );
    const button = screen.getByText("Click Me");

    expect(button).toBeDisabled();
  });

  it("имеет класс active  когда isActive - true", () => {
    render(
      <Button variable="outline" isActive={true}>
        Click Me
      </Button>
    );
    const button = screen.getByText("Click Me");

    expect(button).toHaveClass("active");
  });

  it("должен иметь атрибут 'button'", () => {
    render(<Button variable="outline">Click Me</Button>);
    const button = screen.getByText("Click Me");

    expect(button).toHaveAttribute("type", "button");
  });

  it("должен иметь атрибут 'submit'", () => {
    render(
      <Button variable="outline" type="submit">
        Click Me
      </Button>
    );
    const button = screen.getByText("Click Me");

    expect(button).toHaveAttribute("type", "submit");
  });
});
