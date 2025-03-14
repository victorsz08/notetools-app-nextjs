



export interface StatRootProps {
    children?: React.ReactNode;
};

export interface StatLabelProps {
    children?: React.ReactNode;
};

export interface StatValueTextProps {
    children?: React.ReactNode;
}


export function StatRoot({ children } : StatRootProps) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-full flex flex-col">
            {children}
        </div>
    )
};

export function StatLabel({ children } : StatLabelProps) {
    return (
        <p className="text-xs font-light text-slate-400">{children}</p>
    )
};

export function StatValueText({ children }: StatValueTextProps) {
    return (
        <p className="text-3xl font-bold text-purple-700 font-afacad">{children}</p>
    )
}