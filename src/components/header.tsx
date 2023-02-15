import React from "react";
import '../styling/header.scss'

interface IHeader{
    title: string;
    established: string;
    dir: string
}

export const Header=(props:IHeader)=>{

    return(
        <section className="header__section">
        <h1 className="header__section__title">{props.title}</h1>
        <section className="header__section__info">
        <h6 className="header__section__info__est">{props.established}</h6>
        <h5 className="header__section__info__dir">{props.dir}</h5>
        </section>
        </section>
    );
}

export default Header;