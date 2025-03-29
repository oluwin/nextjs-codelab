export default function UserProfile({params}:{params : {id: string}}){
    return(
        <h1>Profile of User {params.id} </h1>
    )
}