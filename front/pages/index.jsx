import Head from 'next/head'
import WebLayout from '../component/layout/webLayout'
import LoginBtn from "../component/LoginBtn"
import Logo from "../component/Logo"

const Index = () => {
    return (
        <>
            <Head>
                <title>Gamgwi</title>
            </Head>
            <WebLayout>
                <Logo />
                <LoginBtn />
            </WebLayout>
        </>
    )
}

export default Index