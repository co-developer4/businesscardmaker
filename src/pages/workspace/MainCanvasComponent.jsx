import { useState } from "react";

const MainCanvasComponent = (props) => {
    const [ backgroundColor, setBackgroundColor ] = useState('white');
    return (
        <div className="mainCanvas bg-white h-[65vh] max-[1024px]:h-[40vh] border p-5 relative">
            <div className="border-dashed border w-[100%] h-[100%]">

            </div>
        </div>
    )
}

export default MainCanvasComponent;