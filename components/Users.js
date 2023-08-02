const RenderUsers = ({data}) => {

    return (
        <ul>
            {data.map((item) => (
                <div key={item.id} style={{ border: '1px solid black', margin: '15px', width: '400px' }}>
                    <div style={{ margin: '10px' }}>
                        <p>name: {item.name}</p>
                        <p>username: {item.username}</p>
                        <p>email: {item.email}</p>
                        <p>-------address--------
                            <p>street: {item.address?.street} </p>
                            <p>suite: {item.address?.suite}</p>
                            <p>city: {item.address?.city}</p>
                            <p>zipcode: {item.address?.zipcode}</p>
                            <p>---------geo---------
                                <p>lat: {item.address?.geo?.lat}</p>
                                <p>lng: {item.address?.geo?.lng}</p>
                            </p>
                        </p>
                        <p>phone: {item.phone}</p>
                        <p>website: {item.website}</p>
                        <p>---------company--------
                            <p>name: {item.company?.name}</p>
                            <p>catchPhrase: {item.company?.catchPhrase}</p>
                            <p>bs: {item.company?.bs}</p>
                        </p>
                    </div>
                </div>
            ))}
        </ul>
    );
};

export default RenderUsers;