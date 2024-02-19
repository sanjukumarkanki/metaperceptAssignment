import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import BlogCard from './components/BlogCard';
function App() {
  return (
    <div className="h-screen pb-10 w-screen">
        <Navbar />
        <div className='p-3  pt-24 relative flex justify-center items-center flex-col w-full space-y-6'>
            <Banner />
            <BlogCard />
        </div>
    </div>
  );
}

export default App;
