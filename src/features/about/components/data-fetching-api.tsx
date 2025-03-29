"use client";

import { useEffect, useState } from "react";

interface BusinessUnit {
  businessUnitId: number;
  businessUnitName: string;
  region: string;
  state: string;
  contactPerson: string;
}

interface ApiResponse {
  code: string;
  data: BusinessUnit[];
  message: string;
  status: string;
}

export function ClientFetchApi() {
  const [businessUnits, setBusinessUnits] = useState<BusinessUnit[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBusinessUnits = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://172.16.10.29:8045/api/business-units");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: ApiResponse = await response.json();
        console.log(data);
        if (Array.isArray(data.data)) {
          setBusinessUnits(data.data);
        } else {
          setError("Data is not an array");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBusinessUnits();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!businessUnits || !Array.isArray(businessUnits)) {
    return <div>No data available</div>;
  }

  return (
    <div className="text-center">
      <ul>
        {businessUnits.map((businessUnit) => (
          <li key={businessUnit.businessUnitId}>{businessUnit.businessUnitName}</li>
        ))}
      </ul>
    </div>
  );
}