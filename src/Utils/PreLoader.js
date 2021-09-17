import React from 'react';

const PreLoader = () => {

    return (
        <div id="preloaderContainer" >
                <div className="preloader d-flex align-items-center justify-content-center" id="preloader"  style={{opacity: "0.9"}}>
                    <div className="spinner-grow text-primary" role="status">
                        {/*<div className="sr-only">در حال دریافت اطلاعات...</div>*/}
                    </div>
                </div>
        </div>
    );
}

export {PreLoader};
