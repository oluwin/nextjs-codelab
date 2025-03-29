"use client";

import { useState } from "react";

export default function FormSample() {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Hi! ${name}...`);
  };

  return (
    <div className="flex items-center space-x-1 justify-center my-5">
        <p>
            {name}
        </p>
      <form onSubmit={handleSubmit} className="p-4 border rounded-md">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="border p-2 rounded"
        />

        <button type="submit" className="ml-2 rounded bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
      </form>
    </div>
  );
}
