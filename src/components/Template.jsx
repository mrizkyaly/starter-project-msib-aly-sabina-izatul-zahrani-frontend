import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Profile from './Profile';
import Footer from './Footer';

const Template = () => {
    return (
        <div className="flex">
            <div className="z-20"> 
                <Sidebar />
            </div>
            <div className="flex-1 relative overflow-y-auto h-screen"> 
                <Navbar/>
                <div className="w-full bg-surface"> 
                    <Profile/>
                </div>
                <div className="w-full bg-contentbox px-7 py-4">
                    <Footer/>
                </div>
            </div>   
        </div>
    );
};

export default Template;