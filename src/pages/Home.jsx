import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const [urlData, setUrlData] = useState(null);
    const [url, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    async function handleSubmit(e) {
        setIsLoading(true);
        e.preventDefault();
        navigate("/analytics");
        setIsLoading(false);
    }
    let navBar = ["Home", "About", "Tools"];
    return (
        <div id="Home" className="w-full h-full relative">
            {/* <div className="absolute right-5 sm:right-10 top-5 z-[1000] text-white font-[500]">
                <ul className="flex justify-center items-center gap-4 sm:gap-8">
                    {navBar.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link
                                    to={
                                        item.toLowerCase() == "home"
                                            ? "/"
                                            : `/${item.toLowerCase()}`
                                    }
                                >
                                    {item}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div> */}
            <div className="w-full h-[85vh] relative bg-[linear-gradient(#ff0000,#ffc100)] flex justify-center items-center">
                <div className="absolute bottom-[-5px] left-0 w-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#ff9a00"
                            fillOpacity="1"
                            d="M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,234.7C672,256,768,256,864,234.7C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        ></path>
                    </svg>
                </div>
                <div className="flex z-[10] flex-col justify-center items-center ">
                    <div className="flex gap-4 justify-center items-center">
                        <h1 className="text-5xl sm:text-6xl font-bold text-white">
                            OffRoad
                        </h1>
                        <div className="w-[45px] h-[45px] bg-center bg-[url(/favicon.svg)] bg-no-repeat bg-cover rounded-full"></div>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="w-full flex flex-col justify-center items-stretch"
                    >
                        <input
                            type="url"
                            required
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Enter URL Here"
                            className="p-2 sm:p-3 font-sans  mt-2 rounded-md w-full sm:w-[450px] outline-none select-none "
                        />
                        <button
                            type="submit"
                            className="p-2 outline-none mt-1 font-light text-white rounded-md w-full bg-[#ff0000] active:bg-[#ff6200]"
                        >
                            {isLoading ? "Loading..." : "Download"}
                        </button>
                    </form>
                </div>
            </div>
            {urlData != null && <div>URL Data</div>}
        </div>
    );
}

export default Home;
