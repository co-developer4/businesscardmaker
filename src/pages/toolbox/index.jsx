import ToolbarComponent from './ToolbarComponent';
import OptionComponent from './OptionComponent';
import { useEffect, useState } from 'react';

const Toolbox = () => {
    const [text, setText] = useState('text');

    return (
        <div className='w-[41vw] lg:w-[32vw] flex overflow-hidden '>
            { <ToolbarComponent selectTool={setText}/> }
            { <OptionComponent text={text}/> }
        </div>
    )
}

export default Toolbox;