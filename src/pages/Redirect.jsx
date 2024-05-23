import { neon } from "@neondatabase/serverless";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const sql = neon(
    "postgresql://neondb_owner:rZeA4wf8cBpI@ep-young-violet-a1ptwyju-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
);
function Redirect() {
    const id = useParams().id;
    const navigate = useNavigate();
    useEffect(() => {
        const getURL = async () => {
            const url = await sql(
                `SELECT original FROM urls WHERE short = '${id}' LIMIT 1;`
            );
            const visits = await sql(
                `UPDATE urls SET visits = visits + 1 WHERE short = '${id}';`
            );
            if (url.length > 0) {
                window.location.replace(url[0].original);
                return;
            } else {
                alert("Invalid URL");
                navigate("/");
            }
        };
        getURL();
    }, []);
    return (
        <div className="flex justify-center items-center w-full h-[90vh] text-4xl text-white font-bold">
            Redirecting...
        </div>
    );
}

export default Redirect;
