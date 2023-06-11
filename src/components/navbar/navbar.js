function Navbar(){
    const navbarStyle = {
        width:'100%',
        position:'fixed',
        top:'0px',
        display:'flex',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        padding:'10px',
        backgroundColor:'white'
    }

    const nasaStyle = {
        fontWeight:'bold',
        fontSize:'25px'
    }

    const potdStyle = {
        fontWeight:100,
        paddingLeft:5,
        fontSize:'25px'
    }

    return (
        <div style={navbarStyle}>
            <span style={nasaStyle}>NASA</span>
            <span style={potdStyle}>Photo of the Day</span>
        </div>
    )
}

export default Navbar