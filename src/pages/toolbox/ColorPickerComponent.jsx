import { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPickerComponent = (props) => {
    const closeComponent = () => {
        console.log("yes");
        props.setVisible();
    }
    return (
        <div className={`${props.visible} top-0 left-[55px] absolute border rounded border-primary shadow-lg`}>
            <SketchPicker 
                className="w-100%"
                color={props.color}
                onChange={(updatedColor) => props.setColor(updatedColor.hex)}
            />
            <button
                type="button"
                onClick={() => props.addRecommendColor(props.color)}
                className="w-[100%] bg-white inline-block border-y border- border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-slate-100 hover:bg-opacity-1 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light">
                ADD COLOR
            </button>
            <button
                onClick={closeComponent}
                type="button"
                className="w-[100%] bg-white inline-block border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-slate-100 hover:bg-opacity-1 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light">
                CLOSE
            </button>
        </div>
    )
}

export default ColorPickerComponent;