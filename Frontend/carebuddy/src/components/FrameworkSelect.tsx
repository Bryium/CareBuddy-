import { ChangeEvent } from "react";

interface Props {
  onSelect: (framework: string) => void;
}

export default function FrameworkSelect({ onSelect }: Props) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value);
  };

  return (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="framework"
          className="block text-sm font-medium text-gray-700"
        >
          Select Framework
        </label>
        <select
          id="framework"
          onChange={handleChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <option value="">-- Select --</option>
          <optgroup label="Frontend">
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
          </optgroup>
          <optgroup label="Backend">
            <option value="node">Node.js</option>
            <option value="django">Django</option>
          </optgroup>
        </select>
      </div>
    </div>
  );
}
