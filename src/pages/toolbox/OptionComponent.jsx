import ColorComponent from './ColorComponent';

const OptionComponent = (props) => {
    
    const subHeader = () => {
        
        return (
            <div className="flex items-end justify-between">
                <h1 className="font-bold text-2xl">Edit { props.text }</h1>
                {
                    props.text != "background" && <button
                        type="button"
                        className="inline-block rounded border-2 border-success px-4 py-1 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        data-te-ripple-init>
                        ADD { props.text.toUpperCase() }
                    </button>
                }
            </div>
        )
    }

    const content = () => {
        return (
            <>
                { props.text != 'background' && <h1 className="text-xs">You have no { props.text }, add { props.text } to start editing.</h1>}
                { 
                    props.text == 'background' && <ColorComponent />
                }
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