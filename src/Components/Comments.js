export default function Comments({name,comment}){
return (
    <div className="comments-div">
        <ul>
            <li className="comments-li">
                <p>{name}</p>
                <p>{comment}</p>
            </li>
        </ul>
    </div>
)
}