export default function Foot(props){
    return(
        <footer>
            <div className="footer-item">Total Price to be paid :</div>
            <div className="footer-item">${props.price}</div>
        </footer>
    )
}