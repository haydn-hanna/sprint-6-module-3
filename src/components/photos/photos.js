import Photo from './photo'
import styled from 'styled-components'

function Photos(props){
    const {photos} = props;
    
    const PhotoContainer = styled.div`
        margin-top:100px;
    `

    return (
        <PhotoContainer>
            {
                photos.map(photo=>{
                    return <Photo title={photo.alt} author={photo.photographer} photoUrl={photo.src.medium} date={photo.date} description={photo.description}/>
                })
            }
        </PhotoContainer>
    )
}

export default Photos;