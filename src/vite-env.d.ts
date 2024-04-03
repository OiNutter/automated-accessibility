/// <reference types="vite/client" />

import type { AxeMatchers } from 'vitest-axe/matchers'

declare module 'vitest' {
  export interface Assertion extends AxeMatchers {}
  export interface AsymmetricMatchersContaining extends AxeMatchers {}
}
