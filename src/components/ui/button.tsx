



export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    outline?: boolean;
    loading?: boolean;
};


export function Button({ children, outline, loading, ...props } : ButtonProps) {
    
    if(outline) {
        return (
            <button 
                {...props} 
                className={`bg-transparent px-3 py-2 text-sm font-normal flex justify-center items-center
                gap-2 rounded-sm text-purple-600 border border-purple-600 cursor-pointer  
                ${loading && "filter brightness-[110%]"}`}
                >
                    {loading ? 
                        <div className="w-6 h-6 border-4 border-t-purple-600 border-gray-300 rounded-full animate-spin">
                        </div>
                            : 
                        children
                    }   
            </button>
        )
    }

    return (
        <button 
            {...props} 
            className={`bg-purple-600 px-5 py-3 w-full text-sm font-normal flex justify-center items-center
            gap-2 rounded-sm text-white hover:bg-purple-700 duration-200 cursor-pointer 
            ${loading && "opacity-60 hover:bg-purple-600 hover:opacity-40 cursor-wait"}`}
            >
                {loading ? 
                    <div className="w-6 h-6 border-4 border-t-white border-gray-300 rounded-full animate-spin">
                    </div>
                        : 
                    children
                }
        </button>
    )
}