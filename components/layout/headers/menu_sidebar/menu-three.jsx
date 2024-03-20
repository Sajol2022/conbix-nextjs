import Link from "next/link";
import Image from "next/image";
import logo1 from "../../../../public/assets/img/logo-2.png";
import ResponsiveMenu from "../responsive-menu";

const MobileMenuThree = ({ isOpen, setIsOpen }) => {
    return (
        <div className={`menu__bar-popup three ${isOpen ? "show" : ""}`}>
            <div className="menu__bar-popup-top">
                <div className="logo">
                    <Link href="/"><Image src={logo1} alt='logo' width="auto" priority /></Link>
                </div>
                <div className="close" onClick={() => setIsOpen(false)}>
                    <i className="fal fa-times"></i>
                </div>
            </div>
            <div className="responsive-menu mean-container">
                <div className="mean-bar">
                    <div className="mean-nav">
                        <ResponsiveMenu />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenuThree;