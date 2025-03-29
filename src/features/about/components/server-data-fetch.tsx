export default async function ServerFetch(){
    const data =  await fetch("http://172.16.10.29:8045/api/business-units").then((res) => res.json())

    return(
        <ul>
            {data.data.map((post: never) => (
                <li key={post.businessUnitId}>{post.contactPerson}</li>
            ))}
        </ul>
    )
}