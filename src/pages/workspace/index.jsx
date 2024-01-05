import ContextComponent from './ContextComponet';
import CanvasComponent from './CanvasComponent';
import FooterComponent from './FooterComponent';

const Workspace = () => {
    return (
        <>
            <div className='h-[93vh] w-[59vw] lg:w-[68vw] overflow-hidden'>
                { <ContextComponent /> }
                { <CanvasComponent /> }
                { <FooterComponent /> }
            </div>
        </>
    )
}

export default Workspace;