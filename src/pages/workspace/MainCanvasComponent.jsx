import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import WrapperComponent from './WrapperComponent';

const MainCanvasComponent = (props) => {
    const global = useSelector((state) => state.global);

    return (
        <div className="mainCanvas bg-white h-[65vh] max-[1024px]:h-[40vh] border p-5 relative" style={{backgroundColor:global.backgroundColor}}>
            <div className="border-dashed border w-[100%] h-[100%] relative">
                {/* <Rnd
                    minWidth={100}
                    minHeight={50}
                    maxWidth={innerWidth}
                    maxHeight={innerHeight}
                    className="border"
                    default={{ x: 50, y: 50, width: 200, height: 100 }}
                    disableDragging={false}
                    onResizeStop={(e, direction, ref, delta, position) => {
                        setDiagramWidth(ref.style.width);
                        setDiagramHeight(ref.style.height);
                    }}
                    >
                        <div width={diagramWidth} height={diagramHeight} className="text-center py-2 z-[10]">sd</div>
                </Rnd> */}
                { global.textComponents.length != 0 && global.textComponents.map( (ele, index) => <WrapperComponent key={index} index={index} typeKey="text" children={ele} /> ) }
            </div>
        </div>
    )
}

export default MainCanvasComponent;