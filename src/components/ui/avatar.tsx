



export interface AvatarProps {
    name: string;
};

export function Avatar({ name }: AvatarProps) {
    const initials = name.split(" ").map(word => word[0]).join("");

    return (
        <span className="flex items-center justify-center w-10 h-10 rounded-full 
        bg-slate-300 text-purple-700 font-poppins text-base">
            {initials}
        </span>
    )
};