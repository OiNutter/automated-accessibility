import { render } from "@testing-library/react"
import {axe} from "vitest-axe"
import Logo from "./Logo"
import viteLogo from '/vite.svg'
import * as AxeMatchers from "vitest-axe/matchers";

expect.extend(AxeMatchers);

describe("Logo", () => {
  
  it("should render an accessible logo", async () => {
    const { container } = render(<Logo src={viteLogo} alt="Vite logo" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

})