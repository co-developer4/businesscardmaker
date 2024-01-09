import { useState } from "react";
const Toolbar = (props) => {
    const [ toolList, setToolList ] = useState(["templates", "text", "background", "logo", "shape", "images", "qrcode"]);
    const setActive = (keyString) => {
        const list = document.getElementsByClassName('tool');
        for(let i = 0; i < list.length; i ++){
            list[i].className = list[i].className.replace(' bg-slate-100','');
            if( list[i].className.includes("key"+keyString) == true ) list[i].className = list[i].className + ' bg-slate-100';
        }
        props.selectTool(keyString);
    }

    return (
        <div className="h-[100%] overflow-y-auto w-1/5">
            <div className="h-[100%] border-x ">
                { toolList.length != 0 && toolList.map((ele, index) => {
                    if( ele === props.text ) return <div key={index} className="tool keytemplates items-center border-b aspect-square items-center flex flex-col justify-center text-primary hover:cursor-pointer bg-slate-100" onClick={()=>setActive(ele)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                        </svg>

                        <h1 className="text-xs font-bold my-1">{ele.toUpperCase()}</h1>
                    </div>
                    else return <div key={index} className="tool keytemplates items-center border-b aspect-square items-center flex flex-col justify-center text-primary hover:cursor-pointer" onClick={()=>setActive(ele)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                        </svg>

                        <h1 className="text-xs font-bold my-1">{ele.toUpperCase()}</h1>
                    </div>
                }) }
            </div>
        </div>
    )
}

export default Toolbar;