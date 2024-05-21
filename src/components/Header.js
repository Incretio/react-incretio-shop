import React from "react";

function Header() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/"
                   className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4">Incretio Shop</span>
                </a>
            </header>
        </div>
    );
}

export default Header;