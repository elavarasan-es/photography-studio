import { Mail, LocateIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { COLORS } from '../utils/COLORS';
import ContactForm from '../components/ContactForm';
import Footer from './Footer';

function ContactUs() {
  const primaryClr = COLORS.primaryCLR;

  return (
    <div
      className="bg-fixed bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage:
          'url(https://www.fotozoneindia.com/wp-content/uploads/2024/10/013.webp)',
      }}
    >
      {/* Top Content Section */}
      <div className="w-full flex justify-center px-4">
        <div className="bg-[#F0E7D5]/80 w-full max-w-4xl p-16 shadow-lg text-center text-black">
          <h1 className="text-3xl md:text-4xl font-heading mb-4">
            Contact Us!
          </h1>

          <div className="mb-5">
            <CameraAltIcon sx={{ width: 50, height: 50, color: primaryClr }} />
          </div>

          <p className="text-lg mb-6">
            Reach out to book your next photo session or inquire about our
            services. We're here to capture your moments beautifully.
          </p>

          <Link
            className="bg-[#BA9E52] hover:bg-black px-6 py-2 rounded-md text-white"
            to="/"
          >
            View More Blogs
          </Link>

          <div className="mt-6 flex flex-wrap justify-center gap-4 bg-black/10 p-2 rounded text-white text-sm">
            <div className="flex items-center gap-2">
              <CallIcon fontSize="small" />
              <span className="hidden sm:inline">7639569873</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span className="hidden sm:inline">josephin@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <LocateIcon size={18} />
              <span className="hidden sm:inline">Location</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Below */}

      <div className="bg-white w-full p-8 flex md:flex-row  flex-col justify-center">
        <div className="max-w-lg p-4">
          <h1 className="text-3xl text-black mb-3">Get In Touch!</h1>
          <p className="mb-8 text-sm text-gray-600">
            Have Questions or want to schedule a shoot? Contact us today and let
            us bring vision to life.
          </p>

          <div className="text-gray-500 mb-5">
            <h1 className="text-xl text-black mb-3">Josephin (porur)</h1>
            <p>No.31 Spurtank road, Chetpet , Chennai.</p>
            <p>
              Phone: <span className="text-[#BA9E52]">+91 94657357353</span>
            </p>
            <p>Mobile: +91 94657357353</p>
            <p>Mobile: +91 94657357353</p>
          </div>

          <div className="text-gray-500 mb-5">
            <h1 className="text-xl text-black mb-3">Josephin (porur)</h1>
            <p>No.31 Spurtank road, Chetpet , Chennai.</p>
            <p>
              Phone: <span className="text-[#BA9E52]">+91 94657357353</span>
            </p>
            <p>Mobile: +91 94657357353</p>
            <p>Mobile: +91 94657357353</p>
          </div>

          <div className="text-gray-500 mb-5">
            <h1 className="text-xl text-black mb-3">Josephin (porur)</h1>
            <p>No.31 Spurtank road, Chetpet , Chennai.</p>
            <p>
              Phone: <span className="text-[#BA9E52]">+91 94657357353</span>
            </p>
            <p>Mobile: +91 94657357353</p>
            <p>Mobile: +91 94657357353</p>
          </div>
        </div>
        <ContactForm />
      </div>

      <div className="w-full h-[400px]">
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5140625475284!2d76.97964827480517!3d11.005547789154451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859cdfc476857%3A0x122ea83c2d11928!2sCoimbatore%20Railway%20Junction!5e0!3m2!1sen!2sin!4v1716463522403!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
