import '../scss/menu.scss'
import { MdAddCircle } from 'react-icons/md'
import footer from '../assets/footer.svg'
import oops from '../assets/oops.svg'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions'
import Cart from '../components/Cart'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import CircularProgress from '@material-ui/core/CircularProgress'

function Menu() {
    const [menu, setMenu] = useState(() => [])
    const [menuLoaded, setMenuLoaded] = useState(false)
    const [open, setOpen] = useState(false)
    const [showHideMenu, setShowHideMenu] = useState('')
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return
        setOpen(false)
    }

    function addItem(id, title, price, quantity) {
        dispatch(addToCart(id, title, price, quantity))
        setOpen(true)
    }

    function setMenuVisibility() {
        if (showHideMenu === 'hide') {
            setShowHideMenu('')
        } else setShowHideMenu('hide')
    }

    useEffect(() => {
        setLoading(true)
        async function fetchMenu() {
            try {
                const response = await fetch('https://secure-plains-75893.herokuapp.com/api/coffee')
                const data = await response.json()

                setMenu(data)
                setLoading(false)
                setMenuLoaded(true)
            } catch (error) {
                setMenuLoaded(false)
                setLoading(false)
                console.log('is a heckin error')
            }
        }
        fetchMenu()
    }, [])
    return (
        <div className="menu">
            <Cart showMenu={setMenuVisibility} />
            <h1 className={`menu-title ${showHideMenu}`}>Menu</h1>
            {menuLoaded &&
                !loading &&
                menu.map((menuItem) => {
                    return (
                        <div key={menuItem.id} className={`menu-container ${showHideMenu}`}>
                            <button
                                className="add"
                                onClick={() => addItem(menuItem.id, menuItem.title, menuItem.price, 1)}
                            >
                                <MdAddCircle style={{ color: '#2F2926' }} />
                            </button>
                            <Snackbar
                                anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                                open={open}
                                autoHideDuration={1500}
                                onClose={handleClose}
                            >
                                <Alert onClose={handleClose} severity="success">
                                    Added to cart!
                                </Alert>
                            </Snackbar>
                            <h3 className="coffee">{menuItem.title}</h3>
                            <p className="desc">{menuItem.desc}</p>
                            <h3 className="coffee-price">{menuItem.price} kr</h3>
                        </div>
                    )
                })}
            {!menuLoaded && !loading && (
                <div className="whoops">
                    <h3>Aw shucks! Something went sideways... please try again!</h3>
                    <img src={oops} alt="spilled coffee" />
                </div>
            )}
            {loading && (
                <div className="loading">
                    <h2>Loading...</h2>
                    <CircularProgress style={{ color: '#0e927d' }} />
                </div>
            )}

            <img className="footer" src={footer} alt="footer-img" />
        </div>
    )
}

export default Menu
