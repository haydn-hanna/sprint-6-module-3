import styled from 'styled-components'

function Navbar(){
    const NavbarContainer = styled.div`
        width:100%;
        position:fixed;
        top:0px;
        display:flex;
        align-items:flex-start;
        justify-content:flex-start;
        padding:10px;
        background-color:white;
    `;

    const BoldText = styled.span`
        font-weight:bold;
        font-size:25px;
    `;

    const ThinText = styled.span`
        font-weight:100;
        padding-left:5px;
        font-size:25px;
    `

    return (
        <NavbarContainer>
            <BoldText>NASA</BoldText>
            <ThinText>Photo of the Day</ThinText>
        </NavbarContainer>
    )
}

export default Navbar