export default function Sidebar(){
const categories=["Beauty","Fashion","Fitness","News","Podcasts","Boxing","BasketBall","Music","Comedy","Dancing",]

return (
    categories.map(category=>(
        <div>
            <button>{category}</button>
        </div>
    ))
)
}