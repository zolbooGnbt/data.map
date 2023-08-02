const RenderComments = ({data}) => {
    return (
        <ul>
            {data.map((item) => (
                <div key={item.id} style={{ border: '1px solid black', margin: '15px', width: '400px' }}>
                    <div style={{ margin: '10px' }}>
                        <p>postId: {item.postId}</p>
                        <p>name: {item.name}</p>
                        <p>email: {item.email}</p>
                        <p>body: {item.body}</p>
                    </div>
                </div>
            ))}
        </ul>
    );
};

export default RenderComments;