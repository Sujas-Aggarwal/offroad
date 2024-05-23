import React, { useEffect, useState } from "react";
import copy from "../assets/copy.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { neon } from "@neondatabase/serverless";
import toast from "react-hot-toast";
const sql = neon(
    "postgresql://neondb_owner:rZeA4wf8cBpI@ep-young-violet-a1ptwyju-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
);
function Analytics() {
    const navigate = useNavigate();
    const id = useParams().id;
    const [visit, setVisit] = useState("...");
    useEffect(() => {
        const getClicks = async () => {
            const visits = await sql(
                `SELECT visits FROM urls WHERE short = '${id}' LIMIT 1;`
            );
            if (!(visits.length > 0)) {
                alert("Invalid URL");
                navigate("/");
            }
            setVisit(visits[0].visits);
        };
        getClicks();
    }, []);
    return (
        <div className="w-full min-h-[90vh] flex gap-4 p-4 justify-center items-center">
            <div className="w-full max-w-[400px] rounded-md bg-white p-4 flex flex-col justify-stretch">
                <p>Congratulations, Here is your shortened URL:</p>
                <div className="h-2"></div>
                <code className="bg-[#ffc100] p-2 w-full rounded-md flex justify-between text-sm select-all">
                    {import.meta.env.VITE_PUBLIC_BASE_URL + "/link/" + id}
                    <img
                        src={copy}
                        onClick={() => {
                            navigator.clipboard.writeText(
                                import.meta.env.VITE_PUBLIC_BASE_URL +
                                    "/link/" +
                                    id
                            );
                            toast.success("Copied to clipboard");
                        }}
                        alt="Copy"
                        className="w-[20px] cursor-pointer select-none"
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
                <div className="h-[100px] w-[100px] border-solid text-3xl overflow-hidden font-bold border-[#ffc100] border-[6px] self-center rounded-full flex justify-center items-center text-[#ffc100]">
                    {visit}
                </div>
                <Link
                    to={"/"}
                    className="self-center mt-2 p-2 cursor-pointer text-sm "
                >
                    Create More
                </Link>
            </div>
        </div>
    );
}

export default Analytics;
