import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsWifi2 } from "react-icons/bs"
import { ImBookmarks, ImSpoonKnife } from "react-icons/im"
import { IoLocationSharp, IoLogoNoSmoking } from "react-icons/io5"
import { TbParking } from "react-icons/tb"

import img from '../../assets/image/5.jpg'
import { Link } from "react-router-dom"


function DormListing() {
    const dispatch = useDispatch()
    const {dormData, status, error} = useSelector((state) => state.dorm);
    useEffect(() => {
        let isMounted = true
       
          dispatch(fetchDorm())
        
        return () => {
          isMounted = false
        }
      }, [dispatch])
    return (
        <div className="dorm-page">

            <div className="dorm-container">

                {/* dorm 1  */}
                <div className="item-container">
                    <figure className="relative">
                        <img src={img} alt="dorm" />

                        <div className="rating-container">
                            <div className="rating space-x-1">
                                <input type="radio" name="rating-2" className="rating-style" />
                                <input type="radio" name="rating-2" className="rating-style" />
                                <input type="radio" name="rating-2" className="rating-style" />
                                <input type="radio" name="rating-2" className="rating-style" />
                                <input type="radio" name="rating-2" className="rating-style" />
                            </div>

                            <div className="rating-number">
                                4.5
                            </div>
                        </div>
                    </figure>
                    <div className="card-body p-5">
                        <div className="dorm-title">
                            <h2 className="title mb-1">
                                <Link to={'/dorm/23'}>Dorm Name here</Link>
                            </h2>
                            <p className="location">
                                <IoLocationSharp className="text-[#F9B90F] text-xl" />
                                <span> 34-42 Montgomery St , NY, USA</span></p>
                        </div>

                        <div className="dorm-text">
                            <p className="leading-6 text-sm py-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cumque. Dignissimos, dolorem.
                            </p>

                            <div className="icon-c">
                                <BsWifi2 className="icon-p text-3xl"/>
                                <TbParking className="icon-p"/>
                                <IoLogoNoSmoking className="icon-p"/>
                                <ImSpoonKnife className="icon-p"/>
                            </div>
                        </div>
                        <div className="bookmark">
                            <ImBookmarks className="icon-b"/>
                        </div>
                    </div>
                </div>

                {/* dorm 2  */}
                <div className="item-container">
                    <figure className="relative">
                        <img src={img} alt="Shoes" />

                        <div className="rating-container">
                            <div className="rating space-x-1">
                                <input type="radio" name="rating-2" className="rating-style" />
                                <input type="radio" name="rating-2" className="rating-style" />
                                <input type="radio" name="rating-2" className="rating-style" />
                                <input type="radio" name="rating-2" className="rating-style" />
                                <input type="radio" name="rating-2" className="rating-style" />
                            </div>

                            <div className="rating-number">
                                4.5
                            </div>
                        </div>
                    </figure>
                    <div className="card-body p-5">
                        <div className="dorm-title">
                            <h2 className="title mb-1">
                                <Link to={'/dorm/23'}>Dorm Name here</Link>
                            </h2>
                            <p className="location">
                                <IoLocationSharp className="text-[#F9B90F] text-xl" />
                                <span> 34-42 Montgomery St , NY, USA</span></p>
                        </div>

                        <div className="dorm-text">
                            <p className="leading-6 text-sm py-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cumque. Dignissimos, dolorem.
                            </p>

                            <div className="icon-c">
                                <BsWifi2 className="icon-p text-3xl"/>
                                <TbParking className="icon-p"/>
                                <IoLogoNoSmoking className="icon-p"/>
                                <ImSpoonKnife className="icon-p"/>
                            </div>
                        </div>
                        <div className="bookmark">
                            <ImBookmarks className="icon-b"/>
                        </div>
                    </div>
                </div>

                {/* dorm 3  */}
                <div className="item-container">
                    <figure className="relative">
                        <img src={img} alt="Shoes" />

                        <div className="rating-container">
                            <div className="rating space-x-1">
                                <input type="radio" name="rating-2" className="rating-style" />
                                <input type="radio" name="rating-2" className="rating-style" />
                                <input type="radio" name="rating-2" className="rating-style" />
                                <input type="radio" name="rating-2" className="rating-style" />
                                <input type="radio" name="rating-2" className="rating-style" />
                            </div>

                            <div className="rating-number">
                                4.5
                            </div>
                        </div>
                    </figure>
                    <div className="card-body p-5">
                        <div className="dorm-title">
                            <h2 className="title mb-1">
                                <Link to={'/dorm/23'}>Dorm Name here</Link>
                            </h2>
                            <p className="location">
                                <IoLocationSharp className="text-[#F9B90F] text-xl" />
                                <span> 34-42 Montgomery St , NY, USA</span></p>
                        </div>

                        <div className="dorm-text">
                            <p className="leading-6 text-sm py-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cumque. Dignissimos, dolorem.
                            </p>

                            <div className="icon-c">
                                <BsWifi2 className="icon-p text-3xl"/>
                                <TbParking className="icon-p"/>
                                <IoLogoNoSmoking className="icon-p"/>
                                <ImSpoonKnife className="icon-p"/>
                            </div>
                        </div>
                        <div className="bookmark">
                            <ImBookmarks className="icon-b"/>
                        </div>
                    </div>
                </div>

                {/* dorm 4  */}
                <div className="item-container">
                    <figure className="relative">
                        <img src={img} alt="Shoes" />

                        <div className="rating-container">
                            <div className="rating space-x-1">
                                <input type="radio" name="rating-2" className="rating-style" />
                                <input type="radio" name="rating-2" className="rating-style" />
                                <input type="radio" name="rating-2" className="rating-style" />
                                <input type="radio" name="rating-2" className="rating-style" />
                                <input type="radio" name="rating-2" className="rating-style" />
                            </div>

                            <div className="rating-number">
                                4.5
                            </div>
                        </div>
                    </figure>
                    <div className="card-body p-5">
                        <div className="dorm-title">
                            <h2 className="title mb-1">
                                <Link to={'/dorm/23'}>Dorm Name here</Link>
                            </h2>
                            <p className="location">
                                <IoLocationSharp className="text-[#F9B90F] text-xl" />
                                <span> 34-42 Montgomery St , NY, USA</span></p>
                        </div>

                        <div className="dorm-text">
                            <p className="leading-6 text-sm py-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cumque. Dignissimos, dolorem.
                            </p>

                            <div className="icon-c">
                                <BsWifi2 className="icon-p text-3xl"/>
                                <TbParking className="icon-p"/>
                                <IoLogoNoSmoking className="icon-p"/>
                                <ImSpoonKnife className="icon-p"/>
                            </div>
                        </div>
                        <div className="bookmark">
                            <ImBookmarks className="icon-b"/>
                        </div>
                    </div>
                </div>



            </div>


        </div>
    )
}

export default DormListing
