"use client";
import Image from "next/image";
import Link from "next/link";

import Reveal from "../Reveal/Reveal";
import { footerData, footerSocialNetworks } from "./Footer.data";



export function Footer() {
    return (
        <div className="max-w-5xl p-6 mx-auto mt-10 md:mt-40">
            <div className="justify-between md:flex">
                <div>
                    <Image src="/assets/logo.png" alt="logo" width={200} height={40} />
                    <Reveal>
                        <p className="mt-5 text-primaryDark max-w-[250px]">
                            A new way to make money easily
                        </p>
                    </Reveal>
                </div>

                {footerData.map(({ id, title, links }) => (
                    <div key={id}>
                        <h4 className="mt-8 text-lg md:mt-0">
                            <Reveal>{title}</Reveal>
                        </h4>
                        {links.map(({ id, name, link }) => (
                            <Link key={id} href={link} className="block mt-4 text-primaryDark 
                                hover:text-white hover:translate-x-[4px] duration-300">
                                <Reveal>{name}</Reveal>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>

            <div className="border-[#3F3E45] border-[1px] my-7" />

            <div className="items-center justify-between md:flex">
                <div className="my-3">
                    <Reveal>
                        2024 Bank. Freetime. All Rights Reserved.
                    </Reveal>
                </div>
                <div className="flex gap-5">
                    {footerSocialNetworks.map(({ id, icon, link }) => (
                        <Link href={link} key={id} className="text-2xl">
                            <Reveal>{icon}</Reveal>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
} 
