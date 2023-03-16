import React, { Component } from 'react';
import Image from 'next/image';
import logoImage from "../../../images/CMK Hotels Logo Cropped.png"
import styles from "../Styles/Landing Page Styles/logo.module.css"

class Logo extends Component {
    render() { 
        return (
            <Image src={logoImage} alt="Logo" className={styles.logo}></Image>
        );
    }
}
 
export default Logo;