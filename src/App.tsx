import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Logo from './components/Logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header role="banner">
        <a href="https://vitejs.dev" title="Vite" target="_blank">
          <Logo src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" title="React" target="_blank">
          <Logo src={reactLogo} alt="React logo" />
        </a>
      </header>
      <main>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      </main>
      <footer role="contentinfo">
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </footer>
    </>
  )
}

export default App
