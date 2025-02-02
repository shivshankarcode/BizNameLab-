"use client";
import { use, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "@/hooks/use-toast";
import QueryDialog from "./QueryDialog";
import { IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useQueryContext } from "@/context/BusinessNameContext";

function Search() {
  const {query,updateQuery}=useQueryContext();
  // console.log(query)
  const [keyword, setKeyword] = useState("");
  const [queryDialog, setQueryDialog] = useState(false);
  const [active, setActive] = useState(false);
  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };
  const showQueryDialog = () => {
    if (keyword === "") {
      return toast({
        title: "Faild to generate business name",
        description: "Please enter keyword to generate business name.",
      });
    }
    updateQuery({keyword});
    setQueryDialog(!queryDialog);
  };
  const handleClear = () => {
    setKeyword("");
    setActive(false);
  };

  return (
    <div className="flex justify-center items-center pt-5 mt-10">
      <div className="w-[600px] flex items-center gap-5 ">
        <div className="border-primary flex items-center gap-2 border-2 rounded-lg px-5	">
          {!active && <div className="h-14 w-7" />}
          {/* {active && !keyword && <div className="h-14 w-7"/>} */}
          {active && <CiSearch className="h-14 w-7 text-primary" />}
          <Input
            value={keyword}
            onChange={handleKeyword}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(keyword || false)}
            placeholder="Enter keyword..."
            className={`h-12  text-white ${
              keyword === ""
                ? "border-none"
                : "border-collapse border-yellow-200"
            } w-96 bg-transparent`}
          ></Input>
          {!keyword && <div className="h-14 w-8"></div>}
          {keyword && (
            <button
              onClick={handleClear}
              className="w-8  rounded-lg flex items-center justify-center"
            >
              <IoMdClose className=" text-primary text-3xl" />
            </button>
          )}
        </div>

        <Button onClick={showQueryDialog} className="h-14 text-lg px-5">
          Generate
        </Button>
      </div>
      <QueryDialog queryDialog={queryDialog} setQueryDialog={setQueryDialog} />
    </div>
  );
}

export default Search;
