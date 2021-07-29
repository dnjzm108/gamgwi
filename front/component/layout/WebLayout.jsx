import Styled from "styled-components"

const WebLayout = ({ children }) => {
    return (
        <>
            <WebWrap>
                <WebInnerWrap>
                    {children}
                </WebInnerWrap>
            </WebWrap>
        </>
    )
}

export default WebLayout


const WebWrap = Styled.div`
    // 모바일 버전
    width : 100%;
    //height: 100vw;
    min-height : 600px;
    
    @media only screen and (min-width:768px){
        // PC 버전
        width : 100%;
        //height : 50vw;
    }
`

const WebInnerWrap = Styled.div`
    // 모바일 버전
    width : 100%;
    //height : 100%;
    
    @media only screen and (min-width:768px){
        // PC 버전
        width : 1200px;
        height : auto;
        //min-height: 600px;
        margin : 0 auto;
        //background : #b6e2e7;
    }
`

/* web ver 1200 margin 0 auto */