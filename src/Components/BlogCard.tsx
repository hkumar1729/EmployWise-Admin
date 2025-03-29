import { Avatar } from "./Avatar"

interface BlogCardProps{
    authorName: string,
    publishDate: string,
    title:string,
    description:string,
}

export default function Blogs({
    authorName,
    publishDate,
    title,
    description
}:BlogCardProps){
    return<div className="p-48 -mt-72">
        <div className="flex justify-start items-center ">
            <div className="mr-3">
                <Avatar name={authorName[0]}/>
            </div>
            <div className="font-medium text-base">
                {authorName}
            </div>
            <div className="pl-1 text-base text-gray-400">
                • {publishDate}
            </div>
            
        </div>
        <div className="font-bold text-xl font-sans mt-4">
            {title}
        </div>
        <div className="mt-1 text-slate-700">
            {description}
        </div>
        <div className="flex justify-start items-center mt-16 font-thin"> 
            <div className="text-xs text-slate-400 font-thin">
                {Math.ceil(description.length / 225)} min read
            </div>
        </div>
        <hr className="h-px mt-10 -mb-8 bg-gray-200 border-0 dark:bg-gray-200"/>
    </div>
}