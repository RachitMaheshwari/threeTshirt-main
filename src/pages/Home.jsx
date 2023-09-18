import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import {
  headTextAnimation,
  headContentAnimation,
  headContainerAnimation,
  slideAnimation
}
from '../config/motion';
import { CustomButton } from '../components';
import state from '../store';

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {
        snap.intro && (
          <motion.section className='home' {...slideAnimation('left')}>
            <motion.header {...slideAnimation('down')}>
              <img 
              src='./threejs.png' 
              alt='logo' 
              className='w-8 h-8 object-contain' 
              />
            </motion.header>
            <motion.div className='home-content' {...headContainerAnimation}>
              <h1 className='head-text'>
                Let's <br className='xl:block hidden' />Do It
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
              <p className='max-w-md font-normal text-gray-600'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              </p>
              <CustomButton
                type="filled"
                title="customized it"
                handleClick={()=>state.intro=false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.section>
        )
      }
    </AnimatePresence>
  )
}

export default Home