import { useEffect, useState } from 'react';
import { SearchIcon } from 'lucide-react';

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function Search({ value, onChange }: SearchProps) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(inputValue);
    }, 500);

    return () => clearTimeout(timeout);
  }, [inputValue, onChange]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputValue(event.target.value);
  };

  return (
    <div className="relative">
      <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
        <SearchIcon
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </span>
      <input
        type="search"
        placeholder="Search"
        className="rounded-md ring-0 border h-12 md:w-full w-[90%] border-[#E5E7EB] px-9 focus:ring-0 focus:border-[#E5E7EB] bg-white"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
