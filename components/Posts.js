const RenderPosts = ({data}) => {
    return (
        <ul>
            {data.map((item) => (
                <div key={item.id} style={{ border: '1px solid black', margin: '15px', width: '400px' }}>
                    <div style={{ margin: '10px' }}>
                        <p>userId: {item.userId}</p>
                        <p>title: {item.title}</p>
                        <p>body: {item.body}</p>

                    </div>
                </div>
            ))
            }
        </ul >
    );
};

export default RenderPosts;