'use client'
import React, { PropsWithChildren, ReactNode, createContext, useEffect, useState } from 'react';
import { UserData } from '@/Models';


  // Define the type for the context value
interface ContextValue {
    formValues: UserData;
    updateFormValues: (values: UserData) => void;
    userData: UserData[]; 
    // Add other properties as needed
}

export const FormProviderContext = createContext<ContextValue>(
  {
    formValues: {
        firstName: '',
        lastName: '',
        gender: '',
        phoneNumber: '',
        place: '',
        hobbies: [],
        nationality: '',
        photo: null
    },
    updateFormValues: () => {}, // Default empty function
    userData: []
}
);

export const FormProvider= ({ children }: PropsWithChildren<{}>) => {
    const [formValues, setFormValues] = useState<UserData>({ firstName: '', lastName: '', gender: '', phoneNumber: '', place: '', hobbies: [], nationality: '', photo: null });
    const [userData, setUserData] = useState<UserData[]>([]);

    const updateFormValues = (values: UserData) => {
      console.log("inside");
      setFormValues(values);
      setUserData(prevUserData => [...prevUserData, values]); // Use the current 'values' parameter
      console.log("inside context userData array");
      console.log([...userData, values]); // Log the updated 'userData'
    };

  return (
    <FormProviderContext.Provider value={{ formValues, updateFormValues, userData }}>
      {children}
    </FormProviderContext.Provider>
  );
};

