import Photo from './photo'

function Photos(props){
    const {photos} = props;
    
    const style = {
        marginTop:'100px'
    }

    return (
        <div style={style} className="photoContainer">
            {
                photos.map(photo=>{
                    return <Photo title={photo.alt} author={photo.photographer} photoUrl={photo.src.medium} date={photo.date} description={photo.description}/>
                })
            }
        </div>
    )
}

export default Photos;