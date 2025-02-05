import { Counter } from "./components/Counter"
import { ServerStatus } from "./components/ServerStatus"
import "./index.css"

function App() {
  return (
    <div className="min-h-screen bg-black">
      <main className="page">
        <div className="space-y-10 text-center">
          <a 
            href="https://example.com/" 
            className="BeLLa-Logo"
          >
            BeLLa
            <div className="text-white/50 text-lg">Better Large Language</div>
          </a>
          <div className="white-line-separator fade-in" />
          <p className="subtitle mx-auto max-w-[600px] fade-in">
            NERT. An open-source full-stack web application template.
          </p>          
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="fade-in">
              <Counter />
            </div>
            <div className="fade-in">
              <ServerStatus />
            </div>
          </div>
          <p className="text-white/60 text-sm fade-in">
            View backend status at:{' '}
            <a 
              href="http://localhost:5000" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/90 hover:text-white/60 fade-in"
            >
              http://localhost:5000
            </a>
          </p>
        </div>

      </main>
    </div>
  )
}

export default App 