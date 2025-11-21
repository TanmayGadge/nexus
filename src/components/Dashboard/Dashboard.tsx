import React, { useEffect } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { useDatabase } from "@/context/Context";
import ConnectButton from "../Buttons/ConnectButton";
import DatabaseMenu from "./DatabaseMenu";

interface data {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

const Dashboard = () => {
  const [data, setData] = React.useState<data[]>([
    { name: "Page 1", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page 2", uv: 350, pv: 2400, amt: 2400 },
    { name: "Page 3", uv: 200, pv: 2400, amt: 2400 },
    { name: "Page 4", uv: 425, pv: 2400, amt: 2400 },
    { name: "Page 5", uv: 450, pv: 2400, amt: 2400 },
    { name: "Page 6", uv: 300, pv: 2400, amt: 2400 },
    { name: "Page 7", uv: 400, pv: 2400, amt: 2400 },
  ]);

  // Example simulation
  React.useEffect(() => {
    let count = data.length + 1;
    setInterval(() => {
      setData((prev) => {
        const uvValue = Math.floor(Math.random() * 600);
        const updated = [
          ...prev,
          { name: `Page ${count}`, uv: uvValue, pv: 2400, amt: 2400 },
        ];
        return updated.slice(-7);
      });
      count++;
    }, 3000);
  }, [data]);

  const { connectionUrl, setConnectionUrl, connected, dbConnection, value } =
    useDatabase() as any;

  return (
    <div className="">
      <h1 className="font-bold">Dashboard</h1>
      <div className="my-4">
        <h2 className="text-lg font-semibold">Connect to a Database</h2>
        <div className="flex flex-col space-y-2">
          <DatabaseMenu />

          {value && (
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={connectionUrl}
                onChange={(e) => setConnectionUrl(e.target.value)}
                placeholder="Enter connection URL..."
                className="flex-1 p-2 border rounded"
              />
              <ConnectButton />
            </div>
          )}
        </div>
        {connected && dbConnection && (
          <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded">
            <p className="font-semibold">Connected to {dbConnection.name}</p>
            <p className="text-sm text-gray-600">URL: {dbConnection.url}</p>
          </div>
        )}
      </div>
      {/* <LineChart width={600} height={300} data={data}>
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Line
          dataKey={"uv"}
          type={"monotone"}
          stroke="purple"
          strokeWidth={2}
        />
      </LineChart> */}
    </div>
  );
};

export default Dashboard;
