import { useState, useEffect } from "react";
import { SketchPicker } from "react-color";
import ColorPickerComponent from "./ColorPickerComponent";

const ColorComponent = () => {
    const [ color, setColor ] = useState('#ffffff');
    const [ defaultColors, setDefaultColors ] = useState([
        '#64748b', '#71717a', '#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4', '#3b82f6', '#8b5cf6', '#d946ef', '#f43f5e', '#1e293b',
        '#1c1917', '#7f1d1d', '#dc2626', '#4d7c0f', '#b45309', '#365314', '#5eead4', '#115e59', '#0c4a6e', '#7c3aed', '#db2777', '#9f1239',
    ]);
    const [ recommendColors, setRecommendColors ] = useState([]);

    const [ visible, setVisible ] = useState('hidden');

    useEffect(()=>{
        console.log(color);
    }, [color]);

    const showColorPicker = () => {
        setVisible( visible == 'hidden' ? '' : 'hidden' );
    }
    const addRecommendColor = (newColor) => {
        setRecommendColors([...recommendColors, newColor]);
    }
    return (
        <div className="relative overflow-y-auto h-[90%]">
            <h1 className="text-xs mb-3">New Color</h1>
            <div className="relative">
                <button className="bg-white w-12 h-12 rounded overflow-hidden flex items-center justify-center border mb-3 aspect-square" onClick={showColorPicker} style={{backgroundColor:color}}>+</button>
                <ColorPickerComponent visible={visible} setVisible={showColorPicker} setColor={setColor} color={color} addRecommendColor={addRecommendColor} />
                {/* <SketchPicker 
                    className={visible}
                    styles={pickerStyle}
                    color={color}
                    onChange={(updatedColor) => setColor(updatedColor.hex)}
                /> */}
            </div>
            <h1 className="text-xs mb-3 clear-start">Recommend Colors</h1>
            <div>
                { 
                    recommendColors.length != 0 && recommendColors.map((ele, index) => {
                        return <button key={ele+" " + index} className="w-12 h-12 rounded overflow-hidden flex items-center justify-center border mb-3 aspect-square float-left mr-2" style={{backgroundColor:ele}}></button>
                    }) 
                }
            </div>
            <h1 className="text-xs mb-3 clear-start">Default Colors</h1>
            <div>
                { 
                    defaultColors.length != 0 && defaultColors.map((ele, index) => {
                        return <button key={ele + " " + index} className="w-12 h-12 rounded overflow-hidden flex items-center justify-center border mb-3 aspect-square float-left mr-2" style={{backgroundColor:ele}}></button>
                    }) 
                }
            </div>
        </div> 
    )
}

export default ColorComponent;