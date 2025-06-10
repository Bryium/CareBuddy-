import React, { useState } from "react";

const FrameworkSelect: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-md mx-auto p-8">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`absolute top-4 right-4 p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        {/* Card Container */}
        <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h1 className="text-2xl font-bold mb-6">Project Setup</h1>
          
          {/* Framework Selector */}
          <div className="mb-6">
            <label htmlFor="framework" className={`block mb-2 font-medium ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
              Choose your framework:
            </label>
            <select
              id="framework"
              className={`w-full p-3 rounded-lg border transition-all ${darkMode 
                ? 'bg-gray-700 border-gray-600 hover:border-blue-400 focus:ring-blue-500' 
                : 'bg-white border-gray-300 hover:border-blue-500 focus:ring-blue-200'} 
                focus:outline-none focus:ring-2`}
            >
              <optgroup label="Frontend" className={darkMode ? 'bg-gray-700' : 'bg-gray-100'}>
                <option value="vue">Vue.js</option>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="svelte">Svelte</option>
              </optgroup>
              <optgroup label="Backend" className={darkMode ? 'bg-gray-700' : 'bg-gray-100'}>
                <option value="node">Node.js</option>
                <option value="laravel">Laravel</option>
                <option value="django">Django</option>
                <option value="spring">Spring Boot</option>
              </optgroup>
            </select>
          </div>

          {/* Submit Button */}
          <button
            className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${darkMode 
              ? 'bg-blue-600 hover:bg-blue-500' 
              : 'bg-blue-500 hover:bg-blue-600'} text-white shadow-md`}
          >
            Generate Project
          </button>
        </div>

        {/* Footer Note */}
        <p className={`mt-6 text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Test your LLM application with this UI component
        </p>
      </div>
    </div>
  );
};

export default FrameworkSelect;