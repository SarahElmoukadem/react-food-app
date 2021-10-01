import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartBtn from './HeaderCartBtn';
const Header = (props) => {
return(<>
<header className={classes.header}>
    <h1>Restaurant Meals</h1>
    <HeaderCartBtn onClick={props.onShowCart}/>
</header>

<div className={classes['main-image']}>
    <img src={mealsImage} alt='img meals'/>
</div>
</>)
}

export default Header;