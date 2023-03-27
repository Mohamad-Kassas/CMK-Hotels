import React, { Component } from 'react';
import Image from 'next/image';
import logoImage from "../../../images/CMK Hotels Logo Cropped.png"
import styles from "../Styles/Navigation Bar Styles/Logo.module.css"

function Logo(){
    return (
        <Image src={logoImage} alt="Logo" className={styles.logo}></Image>
    );
}
 
export default Logo;

