import { Link } from "react-router-dom";

export const Nav=()=>{
    return(
        <nav>
            <ul>
                <li><Link to ="/articles"></Link></li>
                <li><Link to ="/short-news"></Link></li>
                <li></li>
            </ul>
        </nav>
    );
}