import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import ImageCarousel from '../components/ImageCarousel';
import { slides } from '../constants/CarouselConst';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { COLORS } from '../utils/COLORS';
import { Link } from 'react-router-dom';
import FlipCard from '../components/FlipCard';
import { FlipCardConsts } from '../constants/FlipCardConsts';
import HomeCard from '../components/HomeCard';
import {
  homeCardDataList,
  homeCardDataList_2,
  recentBlogData,
} from '../constants/homeCardDataList ';
import { Component, LocateIcon, Mail } from 'lucide-react';
import { Leaf } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import CustomAccordion from '../components/Accordian';
import RecentShoots from '../components/RecentShoots';
import CallIcon from '@mui/icons-material/Call';
import Footer from './Footer';

function Home() {
  const [expandedPanel, setExpandedPanel] = useState<string | false>(false);

  const handleChange = (panel: string) => {
    setExpandedPanel((prev) => (prev === panel ? false : panel));
  };

  const primaryClr = COLORS.primaryCLR;
  const text_link =
    'text-[#d4af37] cursor-pointer hover:text-black transition-colors';

  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  return (
    <div>
      <ImageCarousel slides={slides} />
      <div className="p-8 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-5">
            <CameraAltIcon
              sx={{ width: 100, height: 100, color: primaryClr }}
            />
          </div>
          <h1 className="max-w-4xl mb-16 font-montserrat text-center md:text-3xl text-2xl">
            Photos speak volumes about not just that captured moment but all
            about that entire occasion.
          </h1>

          <div
            id="content-detail"
            ref={ref}
            className="flex flex-col md:flex-row gap-5 max-w-4xl md:text-lg text-md leading-7"
          >
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              The people who came together and the joy that was shared.
              Photography is a divine invention to mankind and the{' '}
              <Link to="/" className={text_link}>
                Josephin
              </Link>{' '}
              team takes their craft seriously. Touted as one of the{' '}
              <Link to="/" className={text_link}>
                best photographers in Kanyakumari
              </Link>
              ,{' '}
              <Link to="/" className={text_link}>
                Josephin
              </Link>{' '}
              offers
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              a variety of services like{' '}
              <Link to="/" className={text_link}>
                candid wedding photography
              </Link>
              ,{' '}
              <Link to="/" className={text_link}>
                pre wedding photography
              </Link>
              ,{' '}
              <Link to="/" className={text_link}>
                classical dance photoshoots
              </Link>
              ,{' '}
              <Link to="/" className={text_link}>
                family portrait photography
              </Link>
              ,{' '}
              <Link to="/" className={text_link}>
                maternity photoshoots
              </Link>
              ,{' '}
              <Link to="/" className={text_link}>
                kids photoshoots
              </Link>
              , and{' '}
              <Link to="/" className={text_link}>
                alliance photoshoots
              </Link>
              .
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 sm:w-[38rem] w-[24rem] md:w-[58rem]">
          {FlipCardConsts.map((item, i) => (
            <FlipCard key={i} card={item} />
          ))}
        </div>

        <div className="flex flex-col items-center justify-center mt-[4%] max-w-5xl">
          <h4 className="font-montserrat text-gray-600 ">CREATIVITY</h4>
          <div className="text-[32px] font-semibold text-gray-700">
            GALLERY/PORTFOLIO
          </div>
          <p className="my-10">
            We pride ourselves on simple work ethics – creativity and client
            satisfaction. We respect the client’s need to create wonderful
            memories, and we commit ourselves to create them with our cameras.
            Here are a few stills from our archives!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          {homeCardDataList.map((item) => (
            <HomeCard cardData={item} />
          ))}
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5">
          {homeCardDataList_2.map((item) => (
            <HomeCard cardData={item} />
          ))}
        </div>

        <div className="flex flex-col justify-center items-center gap-16 my-[6rem]">
          <div className="text-[32px] font-semibold text-gray-700">
            Why Choose Us?
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col items-center justify-center w-[24rem] rounded-md border-[#eddead] border">
              <GraduationCap className="w-[25%] h-[25%] text-[#d4af37]" />
              <h1 className="font-roboto my-5 text-2xl font-semibold">
                Professional Approach
              </h1>
              <p className="w-[18rem]">
                Every member has a keen eye and carries the Josephin aesthetic,
                and hence no moment goes amiss.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-[24rem] rounded-md border-[#eddead] border">
              <Leaf className="w-[25%] h-[25%] text-[#d4af37]" />
              <div className="font-roboto my-5 text-2xl font-semibold">
                Hand Holding
              </div>
              <p className="w-[18rem]">
                Every member has a keen eye and carries the Josephin aesthetic,
                and hence no moment goes amiss.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-[24rem] rounded-md border-[#eddead] border">
              <Component className="w-[25%] h-[25%] text-[#d4af37]" />
              <h1 className="font-roboto my-5 text-2xl font-semibold">
                Creative Team
              </h1>
              <p className="w-[18rem]">
                Every member has a keen eye and carries the Josephin aesthetic,
                and hence no moment goes amiss.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:gap-10 items-start ">
        <div className="md:w-1/2 px-8 flex flex-col justify-center items-center text-center">
          <div className="flex-col p-4">
            <h1 className="text-2xl font-bold mb-4">
              Photographing Emotions and Stories
            </h1>
            <p className="text-gray-700 mb-6">
              Emotion in photography refers to the feelings or mood conveyed
              through an image.Whether you’re shooting portraits or even
              landscapes, evoking emotion can set your work apart and make it
              resonate with your audience. In this comprehensive guide, we’ll
              talk about the role of emotion in photography. You’ll be guided on
              how to capture it effectively. And I’ll answer some of the most
              common questions about emotion in photography.
            </p>

             <p className="text-gray-700 mb-6">
              Emotion in photography refers to the feelings or mood conveyed
              through an image.Whether you’re shooting portraits or even
              landscapes, evoking emotion can set your work apart and make it
              resonate with your audience. In this comprehensive guide, we’ll
              talk about the role of emotion in photography. You’ll be guided on
              how to capture it effectively. And I’ll answer some of the most
              common questions about emotion in photography.
            </p>
            <p className="text-gray-700 mb-6">
              Emotion in photography refers to the feelings or mood conveyed
              through an image.Whether you’re shooting portraits or even
              landscapes, evoking emotion can set your work apart and make it
              resonate with your audience. In this comprehensive guide, we’ll
              talk about the role of emotion in photography. You’ll be guided on
              how to capture it effectively. And I’ll answer some of the most
              common questions about emotion in photography.
            </p>
            
          </div>
          <CustomAccordion
            panelKey={'panel1'}
            expanded={expandedPanel}
            onChange={handleChange}
            summary={'Read More'}
            details={
              'Emotion in photography is what transforms a technically good picture into a truly memorable one.It connects the viewer to our subject and tells a deeper story.Whether you’re shooting portraits or even landscapes, evoking emotion can set your work apart and make it resonate with your audience.In this comprehensive guide, we’ll talk about the role of emotion in photography. You’ll be guided on how to capture it effectively. And I’ll answer some of the most common questions about emotion in photography.'
            }
          />
        </div>
        <div className="md:w-1/2 w-full">
          <img src="https://www.fotozoneindia.com/wp-content/uploads/2024/12/181-553x800_px.webp" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <RecentShoots />
      </div>

      <div className="mb-16">
        <h1 className="text-4xl pt-[5%] pb-10 text-black font-pacifico text-center">
          Our Recent Posts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          {recentBlogData.map((item) => (
            <HomeCard recentBlogdata={item} />
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Link
            className="bg-[#BA9E52] hover:bg-black px-4 py-2 my-10 rounded-md text-white text-center"
            to={'/blogs'}
          >
            view more blogs
          </Link>
        </div>
      </div>

      <div className="relative w-full h-[90vh]">
        <img
          src="https://www.fotozoneindia.com/wp-content/uploads/2025/02/09-scaled.webp"
          className="w-full h-full object-cover"
          alt="background"
        />

        <div className="absolute inset-0 bg-[#F0E7D5]/90 flex flex-col items-center justify-center text-black text-center px-4">
          <div className="mb-5">
            <CameraAltIcon sx={{ width: 90, height: 90, color: primaryClr }} />
          </div>

          <h1 className="text-4xl font-heading mb-4 max-w-4xl ">
            Memories are for lifetime,let us capture it for amazingly for
            you!{' '}
          </h1>
          <p className="text-lg max-w-4xl my-16">
            {' '}
            Reach out to us to book your next photo session or inquire about our
            services. We're here to capture your moments beautifully.
          </p>

          <div className="flex items-center justify-center">
            <Link
              className="bg-[#BA9E52] hover:bg-black px-4 py-2 my-10 rounded-md text-white text-center"
              to={'/contact-us'}
            >
              Contact US
            </Link>
          </div>

          <div className="flex items-center justify-center gap-5 bg-black/5 py-1 px-2 rounded-lg">
            <div className="flex items-center justify-center gap-2 hover:text-gray-600">
              <div>
                <CallIcon style={{color:'white'}}/>
              </div>
              <div className='hidden sm:block'>7639569873</div>
            </div>
            <div className="flex items-center justify-center gap-2 hover:text-gray-600">
              <div>
                <Mail color='white'/>{' '}
              </div >
                <div className='hidden sm:block'> josephin@gmail.com</div>
              
            </div>
            <div className="flex items-center justify-center gap-2 hover:text-gray-600">
              <div>
                <LocateIcon color='white' />
              </div>
            <div className='hidden sm:block'> Location</div>
             
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Home;
