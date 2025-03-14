import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import img1 from "../assets/loog.png";

function Header() {
    const cartValue = useSelector((state) => state.Cart.CartItem);

    return (
        <header className="bg-white w-full fixed top-0 left-0 z-50">
            <div className="container mx-auto px-6 md:px-20 lg:px-32 flex items-center justify-between h-20">
                {/* Logo */}
                <motion.div className="flex items-center" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                    <img className="w-40 md:w-52" src={img1} alt="Logo" />
                </motion.div>
                
                {/* Navigation */}
                <nav className="hidden md:flex space-x-12 lg:space-x-10 text-[#183b50] font-semibold">
                    <Link className="transition-transform duration-300 hover:scale-110  hover:text-[#DA4771]" to="/">Home</Link>
                    <Link className="transition-transform duration-300 hover:scale-110 hover:text-[#DA4771]" to="/about">About</Link>
                    <Link className="transition-transform duration-300 hover:scale-110 hover:text-[#DA4771]" to="/product">Product</Link>
                    <Link className="transition-transform duration-300 hover:scale-110 hover:text-[#DA4771]" to="/contact">Contact</Link>
                </nav>
                
                {/* Right Section */}
                <div className="flex items-center gap-6 md:gap-10 lg:gap-16">
                    {/* Phone */}
                    <motion.div 
                        className="hidden md:flex items-center gap-3"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
                        <i className="fa-solid fa-phone text-2xl text-[#183b50]"></i>
                        <a href="https://wa.me/+252616071080"><h4 className="text-[#183b50] font-thin">655315</h4></a>
                    </motion.div>
                    
                    {/* Cart */}
                    <Link to="/cart" className="relative">
                        <motion.i className="fa-solid fa-cart-shopping text-3xl text-[#183b50] relative" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}>
                            <span className="absolute -top-2 -right-2 bg-[#DA4771] text-white text-xs font-bold px-2 py-1 rounded-full">{cartValue.length}</span>
                        </motion.i>
                    </Link>

                    {/* Mobile Menu */}
                    <div className="md:hidden cursor-pointer">
                        <i className="fa-solid fa-bars text-2xl text-[#183b50]"></i>
                    </div>
                </div>
            </div>
            <hr className="border-gray-300" />
        </header>
    );
}

export default Header;
