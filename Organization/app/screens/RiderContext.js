import React, { createContext, useState } from "react";

export const RiderContext = createContext();

export const RiderProvider = ({ children }) => {
  const [numberOfRiders, setNumberOfRiders] = useState(0);
  const [completedDeliveries, setCompletedDeliveries] = useState(120);

  const addRider = () => setNumberOfRiders((prev) => prev + 1);
  const removeRider = () => setNumberOfRiders((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <RiderContext.Provider
      value={{
        numberOfRiders,
        completedDeliveries,
        addRider,
        removeRider,
      }}
    >
      {children}
    </RiderContext.Provider>
  );
};
