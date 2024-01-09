import { useState, useEffect } from "react";
import { SketchPicker } from "react-color";
import ColorPickerComponent from "./ColorPickerComponent";
import { useSelector, useDispatch } from "react-redux";
import { updateBackgroundColor, addRecommendColor, addTextComponent } from "../../app/globalSlice";
import axios from "axios";

const ColorComponent = () => {
    const global = useSelector((state) => state.global);
    const dispatch = useDispatch();

    const [ defaultColors, setDefaultColors ] = useState([
        '#64748b', '#71717a', '#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4', '#3b82f6', '#8b5cf6', '#d946ef', '#f43f5e', '#1e293b',
        '#1c1917', '#7f1d1d', '#dc2626', '#4d7c0f', '#b45309', '#365314', '#5eead4', '#115e59', '#0c4a6e', '#7c3aed', '#db2777', '#9f1239',
    ]);

    const [ visible, setVisible ] = useState('hidden');
    
    const changeColor = (newColor) => {
        dispatch( updateBackgroundColor(newColor) );
        axios.patch("https://business-card-maker-6c95b-default-rtdb.firebaseio.com/global.json", {"backgroundColor":newColor})
            .then((response) => {
                // dispatch( updateBackgroundColor(response.data.backgroundColor) )
            })
            .catch((error) => {
                alert(error);
            })
    }
    const showColorPicker = () => {
        setVisible( visible == 'hidden' ? '' : 'hidden' );
    }
    const addRecommendColor2Global = (newColor) => {
        dispatch(addRecommendColor(newColor));
        axios.patch("https://business-card-maker-6c95b-default-rtdb.firebaseio.com/global.json/", {"recommendColors":[...global.recommendColors, newColor]})
            .then((response) => {
                // dispatch(addRecommendColor(newColor));
            })
            .catch((error) => {
                alert(error)
            })
    }
    return (
        <div className="relative overflow-y-auto h-[90%]">
            <h1 className="text-xs mb-3">New Color</h1>
            <div className="relative">
                <button className="bg-white w-12 h-12 rounded overflow-hidden flex items-center justify-center border mb-3 aspect-square text-bold" onClick={showColorPicker} style={{backgroundColor:global.backgroundColor}}>+</button>
                <ColorPickerComponent visible={visible} setVisible={showColorPicker} setColor={changeColor} color={global.backgroundColor} addRecommendColor={addRecommendColor2Global} />
            </div>
            <h1 className="text-xs mb-3 clear-start">Recommend Colors</h1>
            <div>
                { 
                    global.recommendColors.length != 0 && global.recommendColors.map((ele, index) => {
                        return <button key={ele+" " + index} className="w-12 h-12 rounded overflow-hidden flex items-center justify-center border mb-3 aspect-square float-left mr-2" style={{backgroundColor:ele}} onClick={()=>changeColor(ele)}></button>
                    }) 
                }
            </div>
            <h1 className="text-xs mb-3 clear-start">Default Colors</h1>
            <div>
                { 
                    defaultColors.length != 0 && defaultColors.map((ele, index) => {
                        return <button key={ele + " " + index} className="w-12 h-12 rounded overflow-hidden flex items-center justify-center border mb-3 aspect-square float-left mr-2" style={{backgroundColor:ele}} onClick={()=>changeColor(ele)}></button>
                    }) 
                }
            </div>
        </div> 
    )
}

export default ColorComponent;