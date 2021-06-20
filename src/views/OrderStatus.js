import { useSelector } from 'react-redux'
import '../scss/status.scss'
import drone from '../assets/drone.svg'
import delivered from '../assets/delivered.svg'
import oops from '../assets/oops.svg'
import { useEffect, useState } from 'react'
import * as dayjs from 'dayjs'
import { useHistory } from 'react-router'
import CircularProgress from '@material-ui/core/CircularProgress'

function OrderStatus() {
    const currentUser = useSelector((state) => {
        return state.currentUser
    })

    const history = useHistory()

    const [status, setStatus] = useState('')
    const [latestOrder, setLatestOrder] = useState({})
    const [serverError, setServerError] = useState(false)
    const [orderExists, setOrderExists] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getOrders() {
            setLoading(true)
            try {
                const response = await fetch(
                    `https://secure-plains-75893.herokuapp.com/api/order/${currentUser.userID}`
                )
                const data = await response.json()

                let sorted = data.sort(function (a, b) {
                    return dayjs(b.ETA) - dayjs(a.ETA)
                })

                setServerError(false)
                setLatestOrder(sorted[0])
                setStatus(sorted[0].status)
                setOrderExists(true)
                setLoading(false)
            } catch (error) {
                console.log('Task failed successfully')
                setServerError(true)
            }
        }
        getOrders()
    }, [currentUser])

    const returnToNav = () => {
        history.push('/nav')
    }

    return (
        <div className="order-status">
            {!serverError && !loading && orderExists && (
                <div className="main-content">
                    <div className="top">
                        <p className="orderNumber">
                            Order number <strong>#{latestOrder.orderNumber}</strong>
                        </p>
                        {status === 'Delivered' ? (
                            <img src={delivered} alt="drone and coffee cup" className="drone" />
                        ) : (
                            <img src={drone} alt="airbean drone" className="drone" />
                        )}
                    </div>
                    {status === 'Delivered' ? (
                        <div className="middle">
                            <h3>
                                Your last order was delivered on {dayjs(latestOrder.ETA).format('MMMM D')} at{' '}
                                {dayjs(latestOrder.ETA).format('h:mm a')}
                            </h3>
                        </div>
                    ) : (
                        <div className="middle">
                            <h1>Your order is on the way!</h1>
                            <p>{status}</p>
                        </div>
                    )}

                    <button className="cool" onClick={returnToNav}>
                        Ok, cool!
                    </button>
                </div>
            )}
            {serverError && !loading && (
                <div className="whoops">
                    <h3>Nothing to see here!</h3>
                    <img src={oops} alt="spilled coffee" />
                    <button className="cool" onClick={returnToNav}>
                        Go back
                    </button>
                </div>
            )}
            {loading && (
                <div className="loading">
                    <h2>Fetching order... hang tight...</h2>
                    <CircularProgress style={{ color: '#0e927d' }} />
                </div>
            )}
        </div>
    )
}

export default OrderStatus
