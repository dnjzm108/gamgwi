import Styled from "styled-components"

const Logo = () => {
    return (
        <>
            <LogoWrap>
                <LogoImg src="/logo.png" alt="로고" />
            </LogoWrap>
        </>
    )
}
export default Logo


const LogoWrap = Styled.div`
    width : 100%;
    height : 80%;
    background : #dfdfb6;

    @media only screen and (min-width:768px){
        // PC 버전
        
        min-height : 500px;
        
    }
`

const LogoImg = Styled.img`
    display : block;
    margin : 0 auto;
    width : 100%;
    height : 500px;
    @media only screen and (min-width:768px){
        // PC 버전
        width : 70%;
        min-height : 500px;
        
    }
`
