import ToolbarComponent from './ToolbarComponent';
import OptionComponent from './OptionComponent';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Toolbox = () => {
    const [text, setText] = useState('background');
    const global = useSelector((state) => state.global);

    useEffect(() => {
        if( global.curTextComponent != undefined ){
            setText( "text" );
        }
        console.log(global.curTextComponent + " okay");
    }, [global.curTextComponent])

    return (
        <div className='w-[30vw] flex overflow-hidden max-[1024px]:w-[41vw]'>
            { <ToolbarComponent text={text} selectTool={setText}/> }
            { <OptionComponent text={text} curTextComponent={global.curTextComponent}/> }
        </div>
    )
}

export default Toolbox;