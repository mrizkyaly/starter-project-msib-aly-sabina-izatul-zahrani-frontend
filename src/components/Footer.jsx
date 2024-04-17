const Footer = () => {
    return (
        <div className="block md:flex items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0 text-primary">
                <span className="text-center font-bold md:text-left mb-6 md:mb-0">
                    Copyright © {new Date().getFullYear()}, </span> 
                    Sabina Izatul Zahrani.
            </div>
            <div className="md:py-2 flex justify-center">
                <span className="font-bold text-primary">Studify</span>
            </div>
        </div>
    );
};

export default Footer;