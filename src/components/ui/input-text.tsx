


export interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    invalid?: boolean;
};

export function InputText({ invalid, ...props } : InputTextProps) {

    return (
        <input {...props} className={`bg-slate-50 px-4 py-3 font-light
            text-slate-600 rounded-lg border text-sm min-w-[320px]
            focus:outline-2 focus:outline-purple-400 ${invalid ? "border-red-600" : "border-slate-300"}
            placeholder:text-slate-400`}
        />
    )
}