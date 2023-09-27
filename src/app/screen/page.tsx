import React from 'react';
import Link from 'next/link';
import AguaNotOverwritable from '../aguaNotOverwritable';
import styles from './screen.module.css';
import { Metadata } from "next";

import Image from 'next/image';



export const metadata: Metadata = {
                
}

function Screen() {
    
    
    
    

    function aguaRender() {
        return(
            <div className={"baseScreen hide-native-scrollbar " + styles["Screen"]}>
                
<div id="layer-1-31e565f909cd4dc9903f58577fa63399" className={"baseLayer hide-native-scrollbar " + styles["layer-1-31e565f909cd4dc9903f58577fa63399"]}    >
<div className={"baseImageView " + styles["imageview-1-0725be7b5a5d461c9c94c10ac760fca4"]}  >
    <Image id="imageview-1-0725be7b5a5d461c9c94c10ac760fca4" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'contain' }} fill={true} alt="imageview-1" src='/assets/Wordpress-Logo-Black.png' />
</div>
<Link href="/screen"><div id="text-1-3f8b56f7b2b04630baf5df3e3e31e2f1" className={" baseText " + styles["text-1-3f8b56f7b2b04630baf5df3e3e31e2f1"]}   >
    Productos
</div></Link>
<div id="text-2-d272f975dc8242a8b0617f16d0a95653" className={" baseText " + styles["text-2-d272f975dc8242a8b0617f16d0a95653"]}   >
    Funcionalidades
</div>
<div id="text-3-320a082b503441559d77357251f3f759" className={" baseText " + styles["text-3-320a082b503441559d77357251f3f759"]}   >
    Recursos
</div>
<div id="text-4-4f9802bf3b714b45b38f9889a66747b8" className={" baseText " + styles["text-4-4f9802bf3b714b45b38f9889a66747b8"]}   >
    Planes y Precios
</div>
<div id="text-9-4a57e40710f54fe6a4e85c7e53f21ba4" className={" baseText " + styles["text-9-4a57e40710f54fe6a4e85c7e53f21ba4"]}   >
    Iniciar Sesion
</div>
<div id="text-10-e285275cf0674257abe4f9f0d4acaf1e" className={" baseText " + styles["text-10-e285275cf0674257abe4f9f0d4acaf1e"]}   >
    Comenzar
</div>
</div>
<div id="layer-3-512c753b18f740df8cf191cc91b80d3c" className={"baseLayer hide-native-scrollbar " + styles["layer-3-512c753b18f740df8cf191cc91b80d3c"]}    >
<div id="text-11-77739d2a5050484ab3971d8853bf073f" className={" baseText " + styles["text-11-77739d2a5050484ab3971d8853bf073f"]}   >
    Bienvenido al creador de webs
más querido del mundo
</div>
<div id="text-12-0ce0b49d587743389e6df4256f743308" className={" baseText " + styles["text-12-0ce0b49d587743389e6df4256f743308"]}   >
    El 43 % de las webs están creadas con WordPress. Ni sumando todas las demás alternativas juntas llegarías al número de blogueros, pequeños negocios y grandes empresas que prefieren usar WordPress para crear sus webs. Únete a los millones de personas que han elegido WordPress.com.

Empieza ahora
</div>
<div id="text-13-8c01d4e08ddf4eb6a8110ac02cdf9d5c" className={" baseText " + styles["text-13-8c01d4e08ddf4eb6a8110ac02cdf9d5c"]}   >
    Empieza Ahora
</div>
</div>
            </div>
        );
    };

    return aguaRender();
}

export default Screen;
            