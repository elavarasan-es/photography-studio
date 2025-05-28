import { ChevronRight, Locate, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="bg-black py-16 px-4">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        <div className="max-w-sm ">
          <Link to={'/'}>
            <img
              src="https://www.fotozoneindia.com/wp-content/uploads/2024/06/FZ-LOGO.webp"
              alt="Logo"
            />
          </Link>
        </div>

        <div>
         <h1 className="text-2xl text-[#BA9E52]">Our Services</h1>
         <div className='border-b my-4 max-w-sm border-dashed border-b-[#BA9E52]'></div>
          <div className='text-white font-thin hover:text-[#BA9E52] mb-2'><Link className='flex items-center' to={'/'}> <ChevronRight color='#BA9E52'/> <h4>Weding candit photography</h4>  </Link></div>
           <div className='text-white font-thin hover:text-[#BA9E52] mb-2'><Link className='flex items-center' to={'/'}> <ChevronRight color='#BA9E52'/> <h4>Bussiness portrait photography</h4>  </Link></div>
            <div className='text-white font-thin hover:text-[#BA9E52] mb-2'><Link className='flex items-center' to={'/'}> <ChevronRight color='#BA9E52'/> <h4>Maternity Photoshoot</h4>  </Link></div>
             <div className='text-white font-thin hover:text-[#BA9E52] mb-2'><Link className='flex items-center' to={'/'}> <ChevronRight color='#BA9E52'/> <h4>Alliance Photography</h4>  </Link></div>
              <div className='text-white font-thin hover:text-[#BA9E52] mb-2'><Link className='flex items-center' to={'/'}> <ChevronRight color='#BA9E52'/> <h4>Kids Photoshoot</h4>  </Link></div>
               <div className='text-white font-thin hover:text-[#BA9E52] mb-2'><Link className='flex items-center' to={'/'}> <ChevronRight color='#BA9E52'/> <h4>Classical Dance Photoshoot</h4>  </Link></div>
                <div className='text-white font-thin hover:text-[#BA9E52] mb-2'><Link className='flex items-center' to={'/'}> <ChevronRight color='#BA9E52'/> <h4>Family portrait Photoshoot</h4>  </Link></div>
        </div>

       <div>
         <h1 className="text-2xl text-[#BA9E52]">Quick Links</h1>
         <div className='border-b my-4 max-w-sm border-dashed border-b-[#BA9E52]  mb-2'></div>
          <div className='text-white font-thin hover:text-[#BA9E52]  mb-2'><Link className='flex items-center' to={'/'}> <ChevronRight color='#BA9E52'/> <h4>Proffeional</h4>  </Link></div>
           <div className='text-white font-thin hover:text-[#BA9E52]  mb-2'><Link className='flex items-center' to={'/'}> <ChevronRight color='#BA9E52'/> <h4>Blogs</h4>  </Link></div>
            <div className='text-white font-thin hover:text-[#BA9E52] mb-2'><Link className='flex items-center' to={'/'}> <ChevronRight color='#BA9E52'/> <h4>Contact Us</h4>  </Link></div>
             <div className='text-white font-thin hover:text-[#BA9E52] mb-2'><Link className='flex items-center' to={'/'}> <ChevronRight color='#BA9E52'/> <h4>Wedding saga</h4>  </Link></div>
        </div>

        <div>
         <h1 className="text-2xl text-[#BA9E52]">Contact information</h1>
         <div className='border-b my-4 max-w-sm border-dashed border-b-[#BA9E52]'></div>
          <div className='text-white font-thin hover:text-[#BA9E52] mb-2'><Link className='flex items-center' to={'/'}> <Locate color='#BA9E52'/> <h4>Josephin Studio</h4>  </Link></div>
           <div className='text-white font-thin hover:text-[#BA9E52]  mb-2'><Link className='flex items-center' to={'/'}> <Phone color='#BA9E52'/> <h4>+91 7634546673</h4>  </Link></div>
            <div className='text-white font-thin hover:text-[#BA9E52]  mb-2'><Link className='flex items-center' to={'/'}> <Phone color='#BA9E52'/> <h4>+91 7634546673</h4>  </Link></div>
             <div className='text-white font-thin hover:text-[#BA9E52]  mb-2'><Link className='flex items-center' to={'/'}> <ChevronRight color='#BA9E52'/> <h4>Alliance Photography</h4>  </Link></div>
              <div className='text-white font-thin hover:text-[#BA9E52]  mb-2'><Link className='flex items-center' to={'/'}> <ChevronRight color='#BA9E52'/> <h4>Kids Photoshoot</h4>  </Link></div>
               <div className='text-white font-thin hover:text-[#BA9E52]  mb-2'><Link className='flex items-center' to={'/'}> <ChevronRight color='#BA9E52'/> <h4>Classical Dance Photoshoot</h4>  </Link></div>
                <div className='text-white font-thin hover:text-[#BA9E52]  mb-2'><Link className='flex items-center' to={'/'}> <ChevronRight color='#BA9E52'/> <h4>Family portrait Photoshoot</h4>  </Link></div>
        </div>
      </div>
      <div className='border-b my-4 mt-8 w-full border-dashed border-b-[#BA9E52]'></div>
      <div className='flex items-center justify-center text-[#BA9E52]'><div>Design and developed by Unique Interface</div></div>
    </div>
  );
}
