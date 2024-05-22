import React from "react";
import copy from "../assets/copy.svg";
import { useNavigate } from "react-router-dom";
function Analytics() {
    const navigate= useNavigate();
    return (
        <div className="w-full min-h-[90vh] flex gap-4 p-4 justify-center items-center">
            <div className="w-full max-w-[400px] rounded-md bg-white p-4 flex flex-col justify-stretch">
                <p>Congratulations, Here is your shortened URL:</p>
                <div className="h-2"></div>
                <code className="bg-[#ffc100] p-2 w-full rounded-md flex justify-between">
                    int main =8
                    <img
                        src={copy}
                        onClick={() => {
                            navigator.clipboard.writeText("LOL");
                            alert("Copied!");
                        }}
                        alt="Copy"
                        className="w-[20px] cursor-pointer"
                    />
                </code>
                <div className="h-2"></div>
                <h2>
                    Number of Clicks{" "}
                    <span className="text-xs">
                        {"("}Refresh the page to update{")"}
                    </span>
                </h2>
                <div className="h-4"></div>
                <div className="h-[100px] w-[100px] border-solid text-6xl font-bold border-[#ffc100] border-[6px] self-center rounded-full flex justify-center items-center text-[#ffc100]">
                    {"4"}
                </div>
                <p onClick={()=>{navigate("/")}} className="self-center mt-2 p-2 cursor-pointer text-sm ">Create More</p>
            </div>
        </div>
    );
}

export default Analytics;
