import {createContext, useState} from 'react';
import React from 'react';
import {v4 as uuidv4} from 'uuid'; //고유한 값을 생성

const LogContext = createContext();

export function LogContextProvider({children}) {
  const {logs, setLogs} = useState(
    Array.from({length: 10})
      .map((_, index) => ({
        id: uuidv4(),
        title: 'Log ${index}',
        body: 'Log ${index}',
        date: new Date().toISOString(),
      }))
      .reverse(),
    // [{
    //   id: uuidv4(),
    //   title: 'Log 03',
    //   body: 'Log 03',
    //   date: new Date().toISOString(),
    // },
    // {
    //   id: uuidv4(),
    //   title: 'Log 02',
    //   body: 'Log 02',
    //   date: new Date(Date.now() - 1000 * 60 * 3).toISOString(),
    // },  ]
  );

  const onCreate = ({title, body, date}) => {
    const log = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };
  return (
    <LogContext.Provider vaule={{logs, onCreate}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
