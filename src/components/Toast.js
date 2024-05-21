import React, {useEffect} from "react";

function Toast({name, createdDate, closeToast}) {

    useEffect(() => {
       const timerId = setTimeout(closeToast, 3000);
       return () => clearTimeout(timerId);
    }, [name, createdDate]);

    return (
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="liveToast" className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <strong className="me-auto">Added to cart...</strong>
                    <button type="button" className="btn-close" aria-label="Close" onClick={closeToast}></button>
                </div>
                <div className="toast-body">
                    {name}
                </div>
            </div>
        </div>
    );
}

export default Toast;