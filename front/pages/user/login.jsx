import GoBack from "../../component/GoBack"
import Head from 'next/head'

const login = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <Head>
                <title>Gamgwi | Login</title>
            </Head>
            <h2>Login</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <label htmlFor="useridLogin">ID :</label>
                            <input type="text" id='useridLogin' />
                        </li>
                        <li>
                            <label htmlFor="userpwLogin">PW :</label>
                            <input type="password" id='userpwLogin' />
                        </li>
                    </ul>
                    <button type='submit'>Login</button>
                    <GoBack/>
                </form>
            </div>
        </>
    )
}

export default login