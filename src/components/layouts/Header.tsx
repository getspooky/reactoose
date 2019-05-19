import * as React from 'react'

const Header = function (props:object) {

    return(
        <div className="container w-full md:max-w-3xl mx-auto pt-20">
            <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
                <div className="mx-auto text-left flex items-center flex-wrap my-6 ">
                    <div className="w-full md:w-2/3">
                        <h1 className="text-2xl md:text-4xl text-grey-darkest mb-3">reactoose is awesome</h1>
                        <p className="text-md md:text-lg text-grey-dark leading-normal">
                            A project template for building front-end applications with React , Redux , tailwindcss and Typescript
                        </p>
                    </div>
                    <div className="hidden md:block w-1/3">
                        <img src={require('../../assets/logo-256.png')} className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Header;