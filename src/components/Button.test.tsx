import { render, screen } from "@testing-library/react"
import {axe} from "vitest-axe"
import Button from "./Button"

describe("Button", () => {
  
  it("should render an accessible button", async () => {
    const { container } = render(<Button title="Click Me">OK</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
    const button = await screen.getByRole("button", { name: "OK"})
    expect(button).toBeInTheDocument()
    expect(button).toHaveAccessibleName()
    expect(button).toHaveAttribute("title", "Click Me")
  })

})