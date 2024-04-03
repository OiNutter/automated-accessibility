import { render } from "@testing-library/react"
import {axe} from "vitest-axe"
import App from "./App"
import * as AxeMatchers from "vitest-axe/matchers";

expect.extend(AxeMatchers);

describe("App", () => {
  
  it("should render an accessible page", async () => {
    const { container } = render(<App/>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

})