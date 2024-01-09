import { useEffect, useState } from 'react';
import ColorComponent from './ColorComponent';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { addTextComponent, setTextMaxLayer, setCurTextComponent } from '../../app/globalSlice';
import { TESelect } from "tw-elements-react";

const OptionComponent = (props) => {
    const global = useSelector( (state) => state.global );
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(
            props.curTextComponent
        );
    }, [props.curTextComponent])
    const addComponent = (componentType) => {
        if( componentType == 'text' ){
            const newTextComponent = {
                z_index: global.textMaxLayer,
                content: "Enter your new text here",
                fontFamily: "Abril Fatface",
                upperCase: false,
                width: "210px",
                height: "50px",
                left: "50px",
                top: "50px",
                text_align: "left",
                spacing: 0,
                outline: {},
                shadow: {},
            }
            dispatch(addTextComponent(newTextComponent));
            dispatch(setCurTextComponent(global.textMaxLayer));
            axios.patch("https://business-card-maker-6c95b-default-rtdb.firebaseio.com/global.json/", 
                {"textComponents":[...global.textComponents, newTextComponent],"textMaxLayer":global.textMaxLayer+1, "curTextComponent":global.textMaxLayer})
                .then((response) => {
                    // dispatch(addComponent(newTextComponent));
                    // dispatch( setCurTextComponent(response.data.curTextComponent) );
                    dispatch( setTextMaxLayer( response.data.textMaxLayer ) );
                })
        }
    }
    const subHeader = () => {
        
        return (
            <div className="flex items-end justify-between">
                <h1 className="font-bold text-2xl">Edit { props.text }</h1>
                {
                    props.text != "background" && <button
                        onClick={()=>addComponent(props.text)}
                        type="button"
                        className="inline-block rounded border-2 border-success px-4 py-1 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        data-te-ripple-init>
                        ADD { props.text.toUpperCase() }
                    </button>
                }
            </div>
        )
    }
    const showTextComponent = () => {
        const data = [
            { text: "Helvetica", value: "Helvetica" },
            { text: "Arial", value: "Arial" },
            { text: "Arial Black", value: "Arial Black" },
            { text: "Verdana", value: "Verdana" },
            { text: "Tahoma", value: "Tahoma" },
            { text: "Trebuchet MS", value: "Trebuchet MS" },
            { text: "Impact", value: "Impact" },
            { text: "Gill Sans", value: "Gill Sans" },
          ];
        const curTextComponentIndex = global.textComponents.findIndex( (ele) => ele.z_index == props.curTextComponent );
        if( curTextComponentIndex == -1 ) return <h1 className="text-xs">You have no { props.text }, add { props.text } to start editing.</h1>;
        return (
            <div>
                <textarea
                defaultValue={global.textComponents[curTextComponentIndex].content}
                className="w-[100%] relative m-0 block bg-white min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.05rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                aria-label="With textarea"></textarea>
                <div className="relative md:w-96 pt-5">
                    <TESelect data={data} />
                </div>

            </div>
        )
    }

    const content = () => {
        return (
            <>
                { props.text != 'background' && props.text != 'text' && <h1 className="text-xs">You have no { props.text }, add { props.text } to start editing.</h1>}
                { 
                    props.text == 'background' && <ColorComponent />
                }
                { props.text == 'text' && global.textComponents == undefined && <h1 className="text-xs">You have no { props.text }, add { props.text } to start editing.</h1>}
                { props.text == 'text' && showTextComponent()}
            </>
        )
    }

    return (
        <div className='px-5 py-8 bg-slate-100 w-4/5'>
            { subHeader() }
            <div className="w-[100%] border-b my-5 border-neutral-300"></div>
            { content() }
        </div>
    )    
}

export default OptionComponent;