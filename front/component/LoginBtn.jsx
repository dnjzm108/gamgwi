import Link from 'next/link'
import Styled from "styled-components"

const LoginBtn = () => {
    return (
        <>
            <LoginWrap>
                <div>
                    <Link href='/user/kakao'>
                        <a>카카오로그인</a>
                    </Link>
                </div>
                <div>
                    <Link href='/user/google'>
                        <a>구글로그인</a>
                    </Link>
                </div>
            </LoginWrap>
        </>
    )
}

export default LoginBtn

const LoginWrap = Styled.div`
    & > div {
        width : 100%;
        height : 50px;
        background : #70ac70;
        text-align : right;
    }

    @media only screen and (min-width:768px){
        // PC 버전   
        & > div {
            width : 100%;
            margin : 0 auto;
            min-height : 50px;
            text-align : center;
            background : #70ac70;
        }
    }
`