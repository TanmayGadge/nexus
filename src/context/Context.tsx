import React, {
  useState,
  useContext,
  createContext,
} from "react";

const DatabaseContext = createContext({});

export const useDatabase = () => useContext(DatabaseContext);

export const DatabaseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userDetails, setUserDetails] = useState<any>(null);
  const [selectedDatabase, setSelectedDatabase] = useState<string>("");
  const [connectionUrl, setConnectionUrl] = useState<string>("");
  const [connected, setConnected] = useState<boolean>(false);
  const [dbConnection, setDbConnection] = useState<{
    name: string;
    url: string;
  } | null>(null);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <DatabaseContext.Provider
      value={{
        userDetails,
        setUserDetails,
        selectedDatabase,
        setSelectedDatabase,
        connectionUrl,
        setConnectionUrl,
        connected,
        setConnected,
        dbConnection,
        setDbConnection,
        open,
        setOpen,
        value,
        setValue,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};
