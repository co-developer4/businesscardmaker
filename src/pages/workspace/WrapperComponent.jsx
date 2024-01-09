import { useState } from "react";
import { Rnd } from "react-rnd";
import { useDispatch, useSelector } from "react-redux";

import { setCurTextComponentPos, setCurTextComponentSize, setCurTextComponent } from "../../app/globalSlice";
import axios from "axios";

const WrapperComponent = (props) => {

    const [diagramWidth, setDiagramWidth] = useState(props.children.width);
    const [diagramHeight, setDiagramHeight] = useState(props.children.height);
    const [xPos, setXPos] = useState( parseInt(props.children.left) );
    const [yPos, setYPos] = useState( parseInt(props.children.top) );
    const dispatch = useDispatch();
    const global = useSelector( (state) => state.global );

    return (
        <Rnd
            className="border min-w-fit min-h-[50px]"
            style={{zIndex: props.children.z_index}}
            default={{ x: xPos, y: yPos, width: diagramWidth, height: diagramHeight }}
            disableDragging={false}
            onMouseDown={(e) => {
                dispatch( setCurTextComponent(props.index) );
                axios.patch("https://business-card-maker-6c95b-default-rtdb.firebaseio.com/global.json",{"curTextComponent": props.index})
                    .then((response) => {
                        // dispatch( setCurTextComponent(props.index) );
                    })
                    .catch((error) => {
                        alert(error)
                    })
            }}
            onDragStop={(e, pos)=>{
                dispatch( setCurTextComponentPos({index: props.index, xPos:pos.lastX, yPos:pos.lastY}) )
                const arr = global.textComponents.map((ele, index) => {
                    if( index != props.index ) return ele;
                    return {...props.children, left:pos.lastX + "px", top:pos.lastY + "px"};
                })
                axios.patch("https://business-card-maker-6c95b-default-rtdb.firebaseio.com/global.json",{"textComponents": arr})
                    .then((response) => {
                        // dispatch( setCurTextComponentPos )
                    })
                    .catch((error) => {
                        alert(error)
                    })
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
                dispatch( setCurTextComponentSize({index: props.index, 
                    xPos: position.x,
                    yPos: position.y,
                    diagramWidth:ref.style.width, 
                    diagramHeight:ref.style.height}) );
                const arr = global.textComponents.map((ele, index) => {
                    if( index != props.index ) return ele;
                    return {...props.children, left:position.x + "px", top:position.y + "px", width:ref.style.width , height:ref.style.height};
                })
                axios.patch("https://business-card-maker-6c95b-default-rtdb.firebaseio.com/global.json",{"textComponents":arr})
                    .then((response) => {
                        // dispatch( setCurTextComponentSize )
                    })
                    .catch((error) => {
                        alert(error)
                    })
                setDiagramWidth(ref.style.width);
                setDiagramHeight(ref.style.height);
            }}
            >
            <p width={diagramWidth} height={diagramHeight} className="text-center py-2 px-3 min-w-fit min-h-[50px]">
                { props.children.upperCase == true && props.children.content.toUpperCase() }
                { props.children.upperCase == false && props.children.content }
            </p>
            {/* <div width={diagramWidth} height={diagramHeight} className="text-center py-2 z-[10]">sd</div> */}
        </Rnd>
    )
}

export default WrapperComponent;