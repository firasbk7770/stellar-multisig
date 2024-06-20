import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container text-center">
                <div>
                    ©&nbsp;MTL Stellar Multisig <span className="dimmed"></span>
                </div>
                <div>
                    <a
                        href="https://github.com/montelibero-org/stellar-multisig/issues"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="nowrap"
                    >
                        <i className="icon icon-github"></i> Report a bug&nbsp;
                    </a>
                    <a href="#">
                        <i className="icon icon-day"></i> Light theme
                    </a>
                </div>
                <div>
                </div>
                <div
                    className="dimmed condensed"
                    style={{ fontSize: "0.8em" }}
                >
                    Donations:{" "}
                    <span className="" tabindex="-1">
                        GDQ75AS5VSH3ZHZI3P4TAVAOOSNHN346KXJOPZVQMMS27KNCC5TOQEXP
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
