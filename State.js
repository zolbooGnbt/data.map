import React, { useEffect, useState } from 'react'
import RenderUsers from './components/Users';
import RenderPosts from './components/Posts';
import RenderComments from './components/Comments';

const State = () => {
    const [type, setType] = useState("Users");
    const [data, setData] = useState([]);
    
    //useEffect(Effect) = component render hiigdeh tutam ashiglane
    // useEffect(() => {
    //     console.log("render1");
    // })

    // useEffect(Effect,[]) - component hamgiin anh render hiigdeh uyed ajillana
    // useEffect(() => {
    //     console.log("render2");
    // }, [])


    //useEffect(effect,cause) - cause uurchlugduh uyed effect ajillana
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((response) => response.json())
            .then((json) => {
                setData(json)
            });
    }, [type])


    return (
        <div>
            <button onClick={() => setType("Users")} style={{ margin: "5px" }}>
                Users
            </button>
            <button onClick={() => setType("Posts")} style={{ margin: "5px" }}>
                Posts
            </button>
            <button onClick={() => setType("Comments")} style={{ margin: "5px" }}>
                Comments
            </button>
            <h1>{type}</h1>
            {type === "Users" && <RenderUsers data={data}/>}
            {type === "Posts" && <RenderPosts data={data}/>}
            {type === "Comments" && <RenderComments data={data}/>}
        </div>
    )
}

export default State

