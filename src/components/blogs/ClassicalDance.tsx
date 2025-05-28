import { motion } from 'framer-motion';
import Footer from '../../pages/Footer';

function ClassicalDance() {
  return (
    <div>
      <div className="text-white flex sm:flex-row flex-col sm:justify-between px-4 py-4 items-center bg-[#BA9E52]">
        <div className="text-2xl sm:text-3xl">Blog</div>
        <div>Classical Photoshoot</div>
      </div>

      <div className="mx-[5%] my-6">
        <div className="text-2xl sm:text-4xl text-center font-heading my-6">
          Classical Photoshoot at JosephIn
        </div>

        {/* Hero Image - No animation */}
        <div className="my-8 flex flex-col md:flex-row lg:flex-col gap-4 items-center">
          <img
            src="https://www.fotozoneindia.com/wp-content/uploads/2025/02/small09.webp"
            alt="baby"
            className="lg:w-[60%] lg:h-[60%] md:w-[50%] md:h-[50%]"
          />

          <motion.img
            loading="lazy"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            src="https://www.fotozoneindia.com/wp-content/uploads/2025/02/small12.webp"
            alt="baby"
            className="lg:w-[60%] lg:h-[60%] md:w-[50%] md:h-[50%]"
          />
        </div>

        <div className="my-6">
          <p>
            Conducting a <strong>Josephin</strong> classical dance photoshoot
            for dancers who want to create/update their portfolio or dancers who
            are making their debut performance, is a sacred affair at . Right
            from the studio space set up to the lighting, every small detail is
            given importance, to bring out the desired output and for dancers to
            give their best poses.
          </p>

          <p className="my-5">
            The two important features that dancers reach out to, that{' '}
            <strong>Josephin</strong> is known for, are the possibility for
            striking dance poses and the innovative lighting facilities at our
            studio floor space.
          </p>

          <p>
            The photography team at <strong>JosephIn</strong> boasts of more
            than a decade’s experience in conducting at both studio and outdoor
            spaces. The team are well experienced with gently guiding the dancer
            to strike their poses at a particular angle and height, which helps
            them achieve the desired output with minimum effort.
          </p>
        </div>

        {/* Animated image row 1 */}
        <div className="my-8 flex md:mx-[20%] flex-col sm:flex-row gap-4 justify-center items-center">
          {[
            'https://www.fotozoneindia.com/wp-content/uploads/2025/02/small03.webp',
            'https://www.fotozoneindia.com/wp-content/uploads/2025/02/small07.webp',
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

        {/* Animated image row 2 */}
        <div className="my-8 md:mx-[20%] lg:mx-[20%] flex flex-col gap-4 justify-center items-center">
          {[
            'https://www.fotozoneindia.com/wp-content/uploads/2025/02/small11.webp',
            'https://www.fotozoneindia.com/wp-content/uploads/2025/02/small14.webp',
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
            />
          ))}
        </div>

        {/* Animated image row 3 */}
        <div className="my-8 flex md:mx-[20%] flex-col sm:flex-row gap-4 justify-center items-center">
          {[
            'https://www.fotozoneindia.com/wp-content/uploads/2025/02/small08.webp',
            'https://www.fotozoneindia.com/wp-content/uploads/2025/02/small04.webp',
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

        <p className="my-6">
          Another notable feature in these photoshoot sessions is that the
          dancer will be able to view the captured picture output instantly on
          our monitor, so any change or corrections in poses or costume can be
          done instantly.
        </p>
        <p className="my-6">
          Another notable feature in these photoshoot sessions is that the
          dancer will be able to view the captured picture output instantly on
          our monitor, so any change or corrections in poses or costume can be
          done instantly.
        </p>

        {/* Animated image row 4 */}
        <div className="my-8 flex md:mx-[20%] flex-col sm:flex-row gap-4 justify-center items-center">
          {[
            'https://www.fotozoneindia.com/wp-content/uploads/2025/02/small05.webp',
            'https://www.fotozoneindia.com/wp-content/uploads/2025/02/small06.webp',
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

        <p className="my-6">
          Attention to minute details like the merging red colour of the costume
          and marking colours on the dancer’s hands are captured and edited in
          such a way that both of these elements stand out while holding the
          mudras even if they are juxtaposed.
        </p>
        <p className="my-6">
          The greenroom space is expansive and equipped with well-lit mirrors
          for makeup and ample space for changing costumes.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default ClassicalDance;
