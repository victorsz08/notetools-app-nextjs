




export default function Loading() {
    return (
        <section className="h-screen w-screen grid justify-center items-center">
            <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-purple-700 animate-bounce" />
                <div className="w-4 h-4 rounded-full bg-purple-700 animate-bounce [animation-delay:-.3s]" />
                <div className="w-4 h-4 rounded-full bg-purple-700 animate-bounce [animation-delay:-.5s]" />
            </div>
        </section>
    )
}