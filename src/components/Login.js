import '../scss/login.scss'
import logo from '../assets/airbean-logo.svg'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/actions.js'
import { useHistory } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'

function Login() {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let [isLoggedIn, setIsLoggedIn] = useState(null)
    let [serverError, setServerError] = useState(false)
    let [loading, setLoading] = useState(false)

    const handleUsername = (event) => setUsername(event.target.value)
    const handlePassword = (event) => setPassword(event.target.value)

    const dispatch = useDispatch()
    const history = useHistory()

    async function userLogin(event) {
        event.preventDefault()
        setLoading(true)
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: username, password: password }),
            }
            const response = await fetch('https://secure-plains-75893.herokuapp.com/api/login', requestOptions)
            const data = await response.json()
            dispatch(addUser(data))
            setIsLoggedIn(data.loggedIn)
            setLoading(false)
            setServerError(false)
        } catch (error) {
            console.log("It's dead, Jim")
            setLoading(false)
            setServerError(true)
        }
    }

    useEffect(() => {
        if (isLoggedIn) {
            history.push('/profile')
        }
    }, [isLoggedIn, history])

    return (
        <div className="login">
            <div className="logo">
                <img src={logo} alt="airbean-logo" />
            </div>
            <h1>Welcome to the AirBean family!</h1>
            <p>Login below to order some coffee and see your order history</p>
            <div className="login-form">
                <form action="" onSubmit={userLogin}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        required
                        id="username"
                        name="username"
                        placeholder="coffeecarl"
                        onChange={handleUsername}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        required
                        id="password"
                        name="password"
                        placeholder="123"
                        onChange={handlePassword}
                    />
                    <label htmlFor="gdpr">GDPR OK!</label>
                    <input type="checkbox" id="gdpr" required />
                    <input type="submit" id="submit" value="Log in!" />
                </form>
                {isLoggedIn === false && <p className="errMsg">Wrong username or password. Please try again.</p>}
                {serverError && <p className="errMsg">Eek! Something went wrong on our end. Please try again.</p>}
                {loading && (
                    <p className="errMsg" style={{ color: '#0e927d' }}>
                        Logging in... <CircularProgress style={{ color: '#0e927d' }} size="1rem" />
                    </p>
                )}
            </div>
        </div>
    )
}

export default Login
