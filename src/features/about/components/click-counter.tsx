"use client";

import { Button } from "@/components/button";
import { useState } from "react";

export function ClickCounter() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="space-y-2">
      <h1 className="text-center font-bold text-3xl">
        Clicked {count} time(s)
      </h1>
      <div className="flex items-center space-x-1 justify-center ">
        <Button
          onClickButton={() => setCount(count + 1)}
          bgColor="bg-purple-500"
          borderRadius="rounded"
          label="Click Up!"
        />
        {count < 1 ? (
          <></>
        ) : (
          <Button
            onClickButton={() => setCount(count - 1)}
            bgColor="bg-orange-500"
            borderRadius="rounded"
            label="Click Down!"
          />
        )}
      </div>
      
    </div>
  );
}
