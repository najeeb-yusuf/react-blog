import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar">
                <ul>
                    <li className="nav-items "><a href="#">
                        <span className="material-symbols-outlined | text-primary-400 fw-4">
                            no_accounts
                        </span>
                    </a> </li>
                    <li className="nav-items "><a href="#" >
                        <span className="material-symbols-outlined | text-primary-400 fw-4 ">
                            search
                        </span><p>search</p>
                    </a> </li>
                    <li className="nav-items ">
                        <a href="#">
                            <span className="material-symbols-outlined | text-primary-400 fw-4">
                                trending_up
                            </span> <p>trending</p>
                        </a>
                    </li>
                    <li className="nav-items "><a href="#" >
                        <span className="material-symbols-outlined | text-primary-400 fs-100 fw-4">
                            add_circle
                        </span> <p>create</p>
                    </a></li>
                </ul>
        </nav>
    )
}