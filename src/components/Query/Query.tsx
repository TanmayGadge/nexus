import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import useQuery from "@/hooks/useQuery";

const Query = () => {
  const [text, setText] = React.useState("");
  const [queryOutput, setQueryOutput] = React.useState([]);

async function handleSubmit() {
    if (text) {
      const output = await useQuery({
        query: text,
      });
      
      setQueryOutput(output);
    }
    setText("");
  }

  return (
    <>
      <div className="flex gap-4 fixed bottom-10 ">
        <Input
          type="text"
          placeholder="Enter SQL Query"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
          className=""
        />
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      <div className="">{queryOutput && queryOutput}</div>
    </>
  );
};

export default Query;
