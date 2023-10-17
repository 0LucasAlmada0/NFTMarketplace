export default function CollectionCard({mainImage, imageOne, imageTwo, imageThree, collectionName, userName, userImage}){
    return(
        <div>
            <img className="rounded-3xl" src={mainImage}></img>    
            <div className="flex justify-between mt-4 rounded-3xl">
                <img className="rounded-3xl" width={'100px'} src={imageOne}></img>
                <img className="rounded-3xl" width={'100px'} src={imageTwo}></img>
                <img className="rounded-3xl" width={'100px'} src={imageThree}></img>
            </div>
            <div>
                <h2 className="text-2xl my-4 font-bold">{collectionName}</h2>
                <div className="flex gap-3">
                    <img className="rounded-xl" width={'20px'} src={userImage}></img>
                    <p>{userName}</p>
                </div>
            </div>
        </div>
    )
}