import React from "react";
import "./scss/index.scss";
import "../common/scss/style.scss";
import Facebook from "../../img/facebook_icon_white.png";
import Twitter from "../../img/twitter_icon_white.png";
import Pinterest from "../../img/pinterest_icon_white.png";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div id="footer" className="row bg-lighter-blue pb-3 pt-3">
                <div className="col-2">
                </div>
                <div className="col-4 display-inline text-end border-end pe-5">
                    <Link className="txt-white text-capitalize" to="/">Home</Link> 
                    <br />
                    <Link className="txt-white" to="/about">About us</Link>
                    <br />
                    <Link className="txt-white" to="/blogs">Blog</Link>
                    <br />
                    <Link className="txt-white" to="/about">Contact</Link>

                </div>
                <div className="col-4 display-inline txt-white ps-5">
                    Kontakt telefon: +381 66 112233 <br />
                    Email: blogeraj@gmail.com <br />
                    Adresa: Ul. Mica Blogerica <br />
                    Novi Beograd, Srbija
                </div>
                <div className="col-2 display-inline">
                </div>
            </div>
            <div className="row text-center bg-darker-blue txt-white">
                <div className="col-6 text-end pe-4 my-auto">
                    © 2022 Blogeraj | All rights reserved &emsp;
                </div>
                <div className="col-6 text-start ps-5 my-auto">

                        <a href="https://www.facebook.com" target={"_blank"} rel="noreferrer">
                            <img src={Facebook} rel="noreferrer noopener" alt="" className="footer-icon"></img>
                        </a> 
                        &emsp;
                        <a href="https://www.twitter.com" target={"_blank"} rel="noreferrer">
                            <img src={Twitter} rel="noreferrer noopener" alt="" className="footer-icon"></img>
                        </a> 
                        &emsp;
                        <a href="https://www.pinterest.com" target={"_blank"} rel="noreferrer">
                            <img src={Pinterest} rel="noreferrer noopener" alt="" className="footer-icon"></img>
                        </a> 

                </div>
            </div>
        </>
    );
}