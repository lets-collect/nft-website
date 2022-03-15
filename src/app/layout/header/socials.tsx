import React from "react";

const Social = () => {
    return (

        <div className="container ">

            <div className="py-2 my-3 mx-auto text-center ">
                <hr />
                <ul className="list-unstyled list-inline text-center">

                    <li className="list-inline-item">
                        <a href="https://twitter.com/letscollectnft" className="btn-floating btn-fb mx-1">
                            <i className="icofont-twitter"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://opensea.io/collection/ilmthefilm" className="btn-floating btn-fb mx-1">
                            <img src="/assets/icons/opensea.svg" alt="" className="w-25" />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://discord.gg/efx7NyHVZx" className="btn-floating btn-fb mx-1">
                            <img src="/assets/icons/discord.svg" alt="" className=" w-75" />
                        </a>
                    </li>
                </ul>

            </div>

        </div>





    );
};

export default Social;

