"use client"

import Link from "next/link";
import {useState, useRef} from "react";
import Hamburger from "~/app/_components/hamburger";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {TextPlugin} from "gsap/TextPlugin";
import { text } from "stream/consumers";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);


export default function Nav() {
    const container = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [fst, setFst] = useState(true);
    const containerDefault = {width: 65, height: 65};

    useGSAP(() => {
    }, );

    useGSAP(() => {
        
        if (fst) {
            gsap.set("#nav p", {opacity: 0, x: 40});
            setFst(false);}

        const tl = gsap.timeline();
        if (isOpen) {
            

            tl.from("#nav", {duration: 0.5, width: containerDefault.width, height: containerDefault.height, ease: "power2.in"})
            .from("#nav p", {duration: 0.5, x: 40, opacity: 0, stagger: 0.1, ease: "power2.in"}, "<")
            .to("#nav", {duration: 0.5, width: 400, height: 200, ease: "power2.out"}, "<")
            .to("#nav p", {duration: 0.5, x: 0, opacity: 1, stagger: 0.1, ease: "power2.out"}, "<");
        } else {
            tl.to("#nav p", {duration: 0.25, opacity: 0, x: 40, stagger: 0.1, ease: "power2.in"})
            .to("#nav", {duration: 0.5, width: containerDefault.width , height: containerDefault.height, ease: "power2.inOut"}, "<")
            .set("#nav p", {opacity: 0, x: 40});
        }
    }, {dependencies: [isOpen], scope: container });

    return (
        <div ref={container}>
            <div id="nav"
                className={`container backdrop-filter flex flex-col p-2 rounded-xl backdrop-blur-xl bg-dark/50 gap-2 divide-y divide-hero overflow-hidden ${"h-["+containerDefault.height+"px] " + "w-["+containerDefault.width+"px]"}` } >


                <div className="container backdrop-filter flex flex-row items-center justify-end gap-2">
                    <Hamburger toggled={isOpen} toggleAction={setIsOpen} />
                    {/*<p className="text-center text-2xl text-white">
                        {session && <span>Logged in as {session.user?.name}</span>}
                    </p>*/}
                </div>
                <p className="text-left text-2xl text-light text-nowrap opacity-0">
                    PLACEHOLDER LINK NAME →
                </p>
                <p className="text-left text-2xl text-light text-nowrap opacity-0">
                    PLACEHOLDER LINK NAME →
                </p>
                <p className="text-left text-2xl text-light text-nowrap opacity-0">
                    PLACEHOLDER LINK NAME →
                </p>
            </div>
        </div>
    )
}

function FakeLink({isVisible}: {isVisible: boolean }) {
    if (isVisible){
        return (
            <p className="text-left text-2xl text-light text-nowrap">
                PLACEHOLDER LINK NAME →
            </p>
        )
    }
}