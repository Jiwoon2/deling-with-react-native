import {createContext, useState} from 'react';
import React from 'react';

const LogContext = createContext();

export function LogContextProvider({children}) {
  const [text, setText] = useState('');
  return (
    <LogContext.Provider vaule={{text, setText}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
