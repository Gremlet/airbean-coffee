import '../scss/profile.scss'
import avatar from '../assets/avatar.svg'
import oops from '../assets/oops.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import * as dayjs from 'dayjs'
import { logout } from '../redux/actions'
import { useHistory } from 'react-router'
import CircularProgress from '@material-ui/core/CircularProgress'

function Profile() {
    const currentUser = useSelector((state) => {
        return state.currentUser
    })

    let [history, setHistory] = useState([])
    let [historyLoaded, setHistoryLoaded] = useState(false)
    let [totalSpent, setTotalSpent] = useState(0)
    let [totalDiscounts, setTotalDiscounts] = useState(0)
    let [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const routeHistory = useHistory()

    useEffect(() => {
        setLoading(true)
        async function fetchHistory() {
            try {
                const response = await fetch(
                    `https://secure-plains-75893.herokuapp.com/api/order/${currentUser.userID}`
                )
                const data = await response.json()
                setHistory(data)
                setLoading(false)
                setHistoryLoaded(true)

                let total = 0

                for (let i = 0; i < data.length; i++) {
                    total = total + data[i].price
                    setTotalSpent(total)
                }
            } catch (error) {
                console.log('Big error boi')
                setHistoryLoaded(false)
            }
        }

        fetchHistory()
    }, [currentUser.userID])

    useEffect(() => {
        function getDiscounts() {
            let discounts = 0
            let discountedOrders = history.filter((order) => order.discount > 0)

            for (let order of discountedOrders) {
                discounts = discounts + order.discount
            }

            setTotalDiscounts(discounts)
        }
        getDiscounts()
    }, [history, setTotalDiscounts])

    function logoutUser() {
        dispatch(logout())
        routeHistory.push('/')
    }

    return (
        <div className="profile">
            <img src={avatar} alt="profile img" />
            <h1 className="username">{currentUser.fullname}</h1>
            <p className="email">{currentUser.email}</p>
            <button className="logout" onClick={logoutUser}>
                Log out
            </button>

            {historyLoaded && !loading && (
                <div className="order-history">
                    <h2>Order history</h2>
                    {history.map((item) => {
                        return (
                            <div key={item.orderNumber} className="order-container">
                                <p className="orderno">ORDER # {item.orderNumber}</p>
                                <p className="date">{dayjs(item.ETA).format('YYYY/MM/DD')}</p>
                                <p className="total">Total price</p>
                                <p className="price">{item.price} kr</p>
                                <div className="line"></div>
                            </div>
                        )
                    })}
                    {totalDiscounts > 0 && (
                        <div className="discounts">
                            <p>Total discounts</p>
                            <p>- {totalDiscounts} kr</p>
                        </div>
                    )}
                    <div className="total">
                        <p className="spent">Total spent</p>
                        <p className="grandtotal">{totalSpent - totalDiscounts} kr</p>
                    </div>
                </div>
            )}
            {!historyLoaded && !loading && (
                <div className="whoops">
                    <h3>Aw, shucks! Something went sideways... please try again!</h3>
                    <img src={oops} alt="spilled coffee" />
                </div>
            )}
            {loading && (
                <div className="loading">
                    <h1>Loading...</h1>
                    <CircularProgress style={{ color: '#0e927d' }} />
                </div>
            )}
        </div>
    )
}

export default Profile
