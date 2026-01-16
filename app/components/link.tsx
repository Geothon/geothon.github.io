export default function Link({ href, text, rating } : { href: string; text: string; rating?: number }) {
    
    const num = rating || 0;

    const colorClass = 
    num >= 7 ? "bg-green-500" :
    num >= 4 ? "bg-yellow-500" :
    "bg-red-500";


    return (
        <div className="flex gap-2 items-center">
            <a href={href} className="text-blue-500 underline">
                {text}
            </a>
            <div className={`h-2 w-2 rounded-full ${colorClass}`}>
            </div>
        </div>
    );
}