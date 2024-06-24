"use client";

import React from "react";
import "./header.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();

    return (
        <div className="top-block">
            <div className="container nav relative">
                <a href="/" className="logo" style={{
                    paddingTop: '6px'
                }}>
                    <Image
                        src="/montelibero-small-logo.png"
                        alt="Montelibero Logo"
                        className="dark:invert"
                        width={30}
                        height={30}
                        priority
                    />{" "}
                    &nbsp; MTL Stellar Multisig
                </a>
                <div className="nav-menu-dropdown false">
                    <div className="main-menu top-menu-block">
                        <a href="/public/assets">Assets</a>
                        <a href="/public/account">Accounts</a>
                    </div>
                    <div
                        className="top-menu-block right"
                        style={{
                            float: "right",
                        }}
                    >
                        <div className="network-switch">Network : Public</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
