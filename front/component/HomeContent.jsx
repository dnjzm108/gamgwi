import Styled from "styled-components"

const HomeContent = ()=>{
    return (
        <>
            <div>
                <HomeLogo>
                    <img src="/logo.png" alt="" />
                </HomeLogo>
                오늘은 어떤 글귀를 발견하셨나요 <br />
                광고 영역
            </div>
        </>
    )
}

export default HomeContent

const HomeLogo = Styled.div`
    & > img {
        display : block;
        width : 300px;
        height : 300px;
    }
`