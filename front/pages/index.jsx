import Head from 'next/head'
import JoinBtn from "../component/JoinBtn"
import LoginBtn from "../component/LoginBtn"
import Logo from "../component/Logo"

const Index = ()=>{
    return(
        <>
            <Head>
                <title>Gamgwi</title>
            </Head>
            <Logo/>
            <LoginBtn/>
            <JoinBtn/>
        </>
    )
}

export default Index