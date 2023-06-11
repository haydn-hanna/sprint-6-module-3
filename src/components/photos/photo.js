import styled from 'styled-components'

function Photo(props){
    const {title,photoUrl,date,author,description} = props;

    const Card = styled.div `
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:flex-start;
        box-shadow:0px 0px 10px grey;
        margin:10px;
    `

    const ImgContainer = styled.div`
        width:512px;
        height:288px;
        background-image:url(${photoUrl});
        background-size:cover;
    `

    const InfoContainer = styled.div`
        margin-left:15px;
    `

    return (
        <Card>
            <ImgContainer>
                
            </ImgContainer>
            <InfoContainer>
                <h1>{title}</h1>
                <h2>{author}</h2>
                <h3>{date}</h3>
                <p>{description}</p>
            </InfoContainer>
        </Card>
    )
}

export default Photo;