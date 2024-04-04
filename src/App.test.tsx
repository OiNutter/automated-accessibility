import { render } from "@testing-library/react"
import {axe} from "vitest-axe"
import App from "./App"
import { virtual } from "@guidepup/virtual-screen-reader";

describe("App", () => {
  
  it("should render an accessible page", async () => {
    const { container } = render(<App/>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it("should be screen reader friendly", async (t) => {
    const {container} = render(<App/>)
    t.onTestFinished(async () => await virtual.stop())
    await virtual.start({container})
    await virtual.next() // Vite Link
    expect(await virtual.lastSpokenPhrase()).toEqual("link, Vite logo, Vite")

    await virtual.next() // Vite Logo
    await virtual.next() // End of Vite Link
    await virtual.next() // React Link

    expect(await virtual.lastSpokenPhrase()).toEqual("link, React logo, React")
    
    await virtual.next() // React Logo
    await virtual.next() // End of React Link
    await virtual.next() // End of banner
    await virtual.next() // Main content
    await virtual.next() // Heading
    expect(await virtual.lastSpokenPhrase()).toEqual("heading, Vite + React, level 1")

    await virtual.next() // Button
    expect(await virtual.lastSpokenPhrase()).toEqual("button, count is 0")
    await virtual.press("Enter")
    expect(await virtual.lastSpokenPhrase()).toEqual("button, count is 1")

    expect(await virtual.spokenPhraseLog()).toMatchSnapshot()

  })

})