import React from 'react';

const Githubusers = ({users}) => {
    return (
            <>
            <h2>List of Company Employees </h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                {
                        users.map((curElem) => {
                            const { id, name, website ,address ,company} = curElem;
                        return (
                              <div className="col-10 col-md-4 mt-5" key={id}>
                        <div className="card p-2">
                                <div className="d-flex align-items-center">
                                        {/* <div className="image"> < className="rounded" width="155" /> </div> */}
                                    <div className="ml-3 w-100">
                                        <h4 className="mb-0 mt-0 textCenter">{name}</h4>
                                            <span className="textLeft">{website}</span>
                                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                        <div className="d-flex flex-column">
                                            <span className="followers">Works at</span> <span className="number2">{company.name}</span> </div>
                                        <div className="d-flex flex-column">
                                            <span className="rating">Address</span> <span className="number3">{address.street}</span> </div>
                                        <div className="d-flex flex-column">
                                            <span className="articles">Zipcode</span> <span className="number1">{address.zipcode}</span> </div>
                                        </div>
                                    </div>
                             </div>
                        </div>
                </div>
                    )
                })        
                }
                </div>
            </div>
            </>
    );
}

export default Githubusers;
