import { motion } from 'framer-motion';
import Footer from '../../pages/Footer';

function Family() {
  return (
    <div>
      <div className="text-white flex sm:flex-row flex-col sm:justify-between px-4 py-4 items-center bg-[#BA9E52]">
        <div className="text-2xl sm:text-3xl">Blog</div>
        <div>Portrait Photoshoot</div>
      </div>

      <div className="mx-[10%] my-6">
        <div className="text-2xl sm:text-4xl text-center font-heading my-6">
          Portrait Photoshoot at JosephIn
        </div>

        <p className="mt-8">
          Foto Zone, is the name and destination for portrait photography. We
          started our first studio in 2001 in Spur tank road Chetpet now we have
          studios in Mogappair and Porur. We have experienced and dedicated
          photographers for all you portrait photography needs. Right from baby
          portraits to senior citizen portraits, we will handle the assignments
          very aesthetically.
        </p>

        <p className="my-5">
          Photograph is not just a picture it is a piece of art it can convey
          emotions.
        </p>
        <p className="my-5">
          <strong>Why Joseph In?</strong>
        </p>
        <p className="my-5">
          We have a state of the art well equipped studio with attached green
          room. Our photographers are experts in handling the people to make
          them feel comfortable and we will suggest what kind of clothes and
          poses will suit you. Our expert portrait photographers will suggest
          and guide in terms of posing for family photos.
        </p>

        <div className="my-8 flex flex-col justify-center items-center">
          <motion.img
            loading="lazy"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            src="https://www.fotozoneindia.com/wp-content/uploads/2025/05/3818-6-2048x1365.webp"
            alt="baby"
            className="lg:w-[60%] lg:h-[60%] md:w-[50%] md:h-[50%]"
          />
        </div>

        <div className="my-8 flex md:mx-[20%] flex-col sm:flex-row gap-4 justify-center items-center">
          {[
            'https://www.fotozoneindia.com/wp-content/uploads/2025/05/1185-02-24-scaled.webp',
            'https://www.fotozoneindia.com/wp-content/uploads/2025/05/6P7A1946-scaled.webp',
          ].map((src, idx) => (
            <motion.img
              key={idx}
              loading="lazy"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              src={src}
              alt="baby"
              className="sm:w-[50%] sm:h-[50%]"
            />
          ))}
        </div>

        <p className="mt-8">
          Our photographers will compose your family member’s position in a very
          aesthetic manner. For photography we have many options in furniture.
          And for kids photoshoots we have very trendy and unique props, we
          assure your kids will love it. And our team will capture your best
          expression in the portrait photos.
        </p>

        <p className="my-5">
          For convocation portraits we provide convocation coat and cap. We
          provide a unique photo frame for convocation portraits. In this frame
          you can frame your certificate along with your portrait photo.
        </p>
       

        <div className="my-8 flex flex-col justify-center items-center">
          <motion.img
            loading="lazy"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            src=" https://www.fotozoneindia.com/wp-content/uploads/2025/05/Frame.webp"
            alt="baby"
            className="lg:w-[60%] lg:h-[60%] md:w-[50%] md:h-[50%]"
          />
        </div>

        <div className="my-8 flex md:mx-[20%] flex-col sm:flex-row gap-4 justify-center items-center">
          {[
            'https://www.fotozoneindia.com/wp-content/uploads/2025/05/883-03-24-scaled.webp',
            'https://www.fotozoneindia.com/wp-content/uploads/2025/05/2878-04-21-scaled.webp',
          ].map((src, idx) => (
            <motion.img
              key={idx}
              loading="lazy"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              src={src}
              alt="baby"
              className="sm:w-[50%] sm:h-[50%]"
            />
          ))}
        </div>

         <p className="my-5">
          For convocation portraits we provide convocation coat and cap. We
          provide a unique photo frame for convocation portraits. In this frame
          you can frame your certificate along with your portrait photo.
        </p>

         <p className="my-5">
          For convocation portraits we provide convocation coat and cap. We
          provide a unique photo frame for convocation portraits. In this frame
          you can frame your certificate along with your portrait photo.
        </p>

        <div className="my-8 flex md:mx-[20%] flex-col sm:flex-row gap-4 justify-center items-center">
          {[
            'https://www.fotozoneindia.com/wp-content/uploads/2025/05/095-07-23-scaled.webp',
            'https://www.fotozoneindia.com/wp-content/uploads/2025/05/061-01-23-scaled.webp',
          ].map((src, idx) => (
            <motion.img
              key={idx}
              loading="lazy"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              src={src}
              alt="baby"
              className="sm:w-[50%] sm:h-[50%]"
            />
          ))}
        </div>

        <div className="my-8 flex flex-col justify-center items-center">
          <motion.img
            loading="lazy"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            src=" https://www.fotozoneindia.com/wp-content/uploads/2025/05/1142-01-24-1024x1536.webp"
            alt="baby"
            className="lg:w-[60%] lg:h-[60%] md:w-[50%] md:h-[50%]"
          />
        </div>

        <div>
          <div className="mb-4">
            <strong>FAQ's</strong>
          </div>

          <div className="mb-4">
            <div className="ml-6">
              <strong>
                1. What is the perfect age for a baby photoshoot?{' '}
              </strong>
            </div>
            <p>
              The perfect age for a baby photoshoot is in the time span of 1 to
              12 months, especially when your baby is able to hold their head up
              and smile to show off their cute little teeth.{' '}
            </p>
          </div>

          <div className="mb-4">
            <div className="ml-6">
              <strong>
                2. What is the duration of a photography session?{' '}
              </strong>
            </div>
            <p>
              From 1 to 2 hours, and sometimes longer if needed, a baby
              photoshoot/Little Krishna themed photoshoot is done in accordance
              to the baby’s mood and the selected package tier.
            </p>
          </div>

          <div className="mb-4">
            <div className="ml-6">
              <strong>
                3. Are family members such as parents and siblings allowed to
                appear in the photoshoot?
              </strong>
            </div>
            <p>
              Without a doubt! During the baby photoshoot and little krishna
              photoshoot, we invite family members to participate so that
              everyone can enjoy and create wonderful memories.
            </p>
          </div>

          <div className="mb-4">
            <div className="ml-6">
              <strong>
                4.  When can I expect to get the photos? 
              </strong>
            </div>
            <p>
              The perfect age for a baby photoshoot is in the time span of 1 to
              12 months, especially when your baby is able to hold their head up
              and smile to show off their cute little teeth.{' '}
            </p>
          </div>
        </div>
      </div>

       <Footer />
    </div>
  );
}

export default Family;
