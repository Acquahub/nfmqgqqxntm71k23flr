import React from 'react';
import Link from 'next/link';
import AguaNotOverwritable from '../aguaNotOverwritable';
import styles from './screen2.module.css';
import { Metadata } from "next";

import Image from 'next/image';


export const metadata: Metadata = {
                
}

function Screen2() {
    
    
    
    

    function aguaRender() {
        return(
            <div className={"baseScreen hide-native-scrollbar " + styles["Screen2"]}>
                
<div id="layer-5-eca5410a15884dd79e997339e7f690df" className={"baseLayer hide-native-scrollbar " + styles["layer-5-eca5410a15884dd79e997339e7f690df"]}    >
<div className={"baseImageView " + styles["imageview-3-4755613645a24532bdc7d131bbacd582"]}  >
    <Image id="imageview-3-4755613645a24532bdc7d131bbacd582" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'contain' }} fill={true} alt="imageview-3" src='/assets/Wordpress-Logo-Black.png' />
</div>
</div>
            </div>
        );
    };

    return aguaRender();
}

export default Screen2;
            