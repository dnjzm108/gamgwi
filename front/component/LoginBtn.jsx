import Link from 'next/link'

const LoginBtn = () => {
    return (
        <div>
            <Link href='/user/login'>
                <a>Login</a>
            </Link>
        </div>
    )
}

export default LoginBtn