import ToolbarComponent from './ToolbarComponent';
import OptionComponent from './OptionComponent';
import { useEffect, useState } from 'react';

const Toolbox = () => {
    const [text, setText] = useState('text');

    return (
        <div className='w-[30vw] flex overflow-hidden max-[1024px]:w-[41vw]'>
            { <ToolbarComponent selectTool={setText}/> }
            { <OptionComponent text={text}/> }
        </div>
    )
}

export default Toolbox;