import { Car } from "lucide-react";
import React from "react";

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

interface data {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

const Dashboard = () => {
  // const data = [
  //   { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  //   { name: "Page B", uv: 350, pv: 2400, amt: 2400 },
  //   { name: "Page A", uv: 200, pv: 2400, amt: 2400 },
  //   { name: "Page A", uv: 425, pv: 2400, amt: 2400 },
  //   { name: "Page A", uv: 450, pv: 2400, amt: 2400 },
  //   { name: "Page A", uv: 300, pv: 2400, amt: 2400 },
  //   { name: "Page A", uv: 400, pv: 2400, amt: 2400 }
  // ];
  const [data, setData] = React.useState<data[]>([
    { name: "Page 1", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page 2", uv: 350, pv: 2400, amt: 2400 },
    { name: "Page 3", uv: 200, pv: 2400, amt: 2400 },
    { name: "Page 4", uv: 425, pv: 2400, amt: 2400 },
    { name: "Page 5", uv: 450, pv: 2400, amt: 2400 },
    { name: "Page 6", uv: 300, pv: 2400, amt: 2400 },
    { name: "Page 7", uv: 400, pv: 2400, amt: 2400 },
  ]);

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

  return (
    <div className="">
      <h1 className="font-bold">Dashboard</h1>
      <LineChart width={600} height={300} data={data}>
        {/* <CartesianGrid /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Line
          dataKey={"uv"}
          type={"monotone"}
          stroke="purple"
          strokeWidth={2}
        />
      </LineChart>
    </div>
  );
};

export default Dashboard;
