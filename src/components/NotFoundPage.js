import React from 'react';


const NotFoundPage = () => {

    return (
        <div className="page-content-wrapper py-3">
            <div className="container">
                <div className="card">
                    <div className="card-body px-5 text-center">
                        <img className="mb-4" src="/img/39.png" alt="" style={{height:"250px"}}/>
                        <h4>فکر میکنیم راهتون رو گم کردید</h4>
                        <a className="btn btn-creative btn-danger" href="/">بازگشت به خانه</a>
                    </div>
                </div>
            </div>
        </div>
    );

}

export
{
    NotFoundPage
};
