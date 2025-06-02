import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../test-utils";
import Button from "../../components/Button/Button.component";

describe("Button Component", () => {
  it("renders correctly with default props", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Button className="test-class">Click me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toHaveClass("test-class");
  });

  it("handles click events", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies different variants", () => {
    const { unmount } = render(<Button variant="primary">Primary</Button>);
    const primaryButton = screen.getByRole("button", { name: /primary/i });
    expect(primaryButton).toBeInTheDocument();

    // Limpiamos y renderizamos otro botón para comparar
    unmount();
    render(<Button variant="secondary">Secondary</Button>);
    const secondaryButton = screen.getByRole("button", { name: /secondary/i });
    expect(secondaryButton).toBeInTheDocument();
  });

  it("can be disabled", () => {
    render(<Button disabled>Disabled</Button>);

    const button = screen.getByRole("button", { name: /disabled/i });
    expect(button).toBeDisabled();
  });
});
