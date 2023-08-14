import './MenuItem.css';

function MenuItem(props) {
  return(
    <li className='menu-item'>
      <a href={props.link}>
        {props.text}
      </a>
    </li>
  );
}
export default MenuItem;