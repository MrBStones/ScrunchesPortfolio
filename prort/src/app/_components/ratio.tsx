"use client"

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface RatioProps {
    leftText: string
    rightText: string
    odd: boolean
}

export default function Ratio({leftText, rightText, odd}: RatioProps) {
    const container = useRef<HTMLDivElement>(null);
    useGSAP(()=>{
        let side1 = odd ? '#ratio-left' : '#ratio-right';
        let side2 = odd ? '#ratio-right' : '#ratio-left';

        let tl = gsap.timeline({ repeat: -1, yoyo: false });
        tl.to(side1, { width: '12rem', })
            .to(side2, { width: '24rem', }, "<")
            .to(side1, { width: '24rem', }, )
            .to(side2, { width: '12rem', }, "<");

    },
    {scope : container}
    );

    return (
        <div ref={container} className="container flex flex-row items-center justify-center gap-12 px4 py-16">

            <div
                className={`container flex flex-col items-center justify-center shadow-inner shadow-cambridge-blue rounded-xl md:p-0 h-48 ${odd? "w-96 bg-celadon" : "w-48 bg-spring-green"}`} id={"ratio-left"}>
                <p className="text-center text-2xl text-black">
                    {leftText}
                </p>
            </div>
            <div
                className={`container flex flex-col items-center justify-center shadow-inner shadow-cambridge-blue rounded-xl md:p-0 h-48 ${odd? "w-48 bg-spring-green" : "w-96 bg-celadon"}`} id={"ratio-right"}>
                <p className="text-center text-2xl text-black">
                    {rightText}
                </p>
            </div>
        </div>
    );
}