import { useState } from "react";
import FrameworkSelect from "./components/FrameworkSelect";

function App() {
  const [selectedFramework, setSelectedFramework] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto p-4">
          <h1 className="text-2xl font-bold text-gray-900">LLM App Tester</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4">
        <FrameworkSelect
          onSelect={(framework) => setSelectedFramework(framework)}
        />

        {/* Results Section */}
        {selectedFramework && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">
              Testing: {selectedFramework}
            </h2>
            <div className="p-4 bg-gray-50 rounded-md">
              {/* LLM output will go here */}
              <p className="text-gray-500">Response will appear here...</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
