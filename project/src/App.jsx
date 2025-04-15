import { useState } from 'react'
import { Github } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-4">
          <Github className="w-12 h-12 text-gray-300" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-4 text-white">Vite + React</h1>
        <div className="text-center">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            count is {count}
          </button>
          <p className="mt-4 text-gray-300">
            Edit <code className="bg-gray-700 p-1 rounded">src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </div>
  )
}

export default App