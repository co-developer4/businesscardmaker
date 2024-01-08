import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const MainCanvasComponent = (props) => {
    const global = useSelector((state) => state.global);

    return (
        <div className="mainCanvas bg-white h-[65vh] max-[1024px]:h-[40vh] border p-5 relative" style={{backgroundColor:global.backgroundColor}}>
            <div className="border-dashed border w-[100%] h-[100%]">

            </div>
        </div>
    )
}

export default MainCanvasComponent;