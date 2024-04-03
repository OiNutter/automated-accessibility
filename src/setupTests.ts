import { expect } from "vitest"
import * as AxeMatchers from "vitest-axe/matchers"
import "@testing-library/jest-dom"

expect.extend(AxeMatchers)