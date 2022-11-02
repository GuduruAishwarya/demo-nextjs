export default function User({posts})
{
    return(
        <div>
            <div>{posts.name}:{posts.email}</div>
        </div>
    )
}