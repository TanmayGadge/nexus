import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import useQuery from "@/hooks/useQuery";
import { table } from "console";

const Query = () => {
  const [text, setText] = React.useState("");
  const [queryOutput, setQueryOutput] = React.useState<
    Array<Record<string, unknown>> | null
  >(null);

  async function handleSubmit() {
    if (text) {
      const output = await useQuery({
        query: text,
      });

      setQueryOutput(output);
    }
    setText("");
  }

  React.useEffect(() => {
    console.log(`Query Output: ${queryOutput}`);
    console.log(`Type of Query Output: ${typeof queryOutput}`);
  }, [queryOutput]);

  return (
    <>
      <div className="gap-4 fixed flex top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[75%]">
        <Input
          type="text"
          placeholder="Enter SQL Query"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
          className=" rounded-[0.5rem]"
        />
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      {/* <div className="">{queryOutput && queryOutput}</div> */}
      <div className="flex justify-center">
        {queryOutput &&
          Array.isArray(queryOutput) &&
          queryOutput.length > 0 && (
            <table>
              <thead>
                <tr>
                  {Object.keys(queryOutput[0]).map((col: string) => {
                    return (
                      <th
                        key={col}
                        className="border px-4 py-2 bg-gray-100 font-semibold"
                      >
                        {col}
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {Array.isArray(queryOutput) &&
                  queryOutput.map((row: object, rowIndex: number) => {
                    return (
                      <tr key={rowIndex}>
                        {Object.values(row).map(
                          (value: string, valueIndex: number) => {
                            return (
                              <td key={valueIndex} className="border px-4 py-2">
                                {String(value)}
                              </td>
                            );
                          }
                        )}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          )}

        {typeof queryOutput === "string" && (
          <p className="mt-4 text-center text-lg">{queryOutput}</p>
        )}
      </div>
    </>
  );
};

export default Query;
