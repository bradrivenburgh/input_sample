import { screen, render } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  test("renders to the DOM without crashing", () => {
    render(<Input />);
  });

  test("Is empty by default", () => {
    render(<Input />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveTextContent("");
  });

  test("passes the input successfully", () => {
    render(<Input value="Brad" />);

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("Brad");
  });

  test("passes the id successfully", () => {
    render(<Input id="name" />);

    const input = screen.getByRole("textbox");
    expect(input.id).toBe("name");
  });

  test("passes the handleChange successfully", () => {
    const handleChange = () => {}
  
    render(<Input handleChange={handleChange} />);

    const input = screen.getByRole("textbox");
    expect(input.onChange).toBeUndefined();  

  })

  test("passes the type successfully", () => {
    render(<Input type="text" />);

    const input = screen.getByRole("textbox");
    expect(input.type).toBe("text");

  })
});
