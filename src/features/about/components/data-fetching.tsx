"use client";

import {useEffect, useState} from "react";

export function ClientFetch(){
    const [data, setData] = useState<any>([]);

    useEffect(()=> {
        // fetch("http://172.16.10.29:8045/api/business-units")
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data)=> setData(data));
    }, []);

    return(
        <div className="text-center">
            <ul>
                {data.map((post: any) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}