import React from "react";
import { Button } from "../ui/button";
import { useDatabase } from "@/context/Context";
import sendData from "@/hooks/sendData";

const ConnectButton = () => {
  const { connectionUrl, value, setDbConnection, setConnected } =
    useDatabase() as any;

  const handleConnect = async () => {
    if (value && connectionUrl) {
      const connection = {
        name: value,
        url: connectionUrl,
      };

      setDbConnection(connection);
      try {
        await sendData(connection);
        setConnected(true);
      } catch (error) {
        console.error("Failed to connect to database:", error);
        setDbConnection(null);
      }
    }
  };

  return (
    <Button
      onClick={handleConnect}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      disabled={!connectionUrl}
    >
      Connect
    </Button>
  );
};

export default ConnectButton;
