function Photo(props){
    const {title,photoUrl,date,author,description} = props;

    const cardStyle = {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        boxShadow:"0px 0px 10px grey",
        margin:"10px"
    }

    const imgStyle = {
        width:"512px",
        height:'288px',
        backgroundImage:`url(${photoUrl})`,
        backgroundSize:'cover'
    }

    const infoStyle = {
        marginLeft:'15px'
    }

    return (
        <div className="card" style={cardStyle}>
            <div style={imgStyle} className="imgContainer">
                
            </div>
            <div style={infoStyle} className="infoContainer">
                <h1>{title}</h1>
                <h2>{author}</h2>
                <h3>{date}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Photo;