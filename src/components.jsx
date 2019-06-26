import React from "react"
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            <p>Welcome to my website about my pets.</p>
            <ul>
                <li>
                    <Link to="/dog">My Dog</Link>
                </li>
                <li>
                    <Link to="/cat">My Cat</Link>
                </li>
            </ul>
        </div>
    )
}

const Dog = () => {
    return "My dog Thundric is great. I couldn’t decide between Thunder or Electric. Don’t call him Rick."
}

const Cat = () => {
    return "I love my cat Smalls. He sure is hefty."
}

export { Homepage, Dog, Cat }