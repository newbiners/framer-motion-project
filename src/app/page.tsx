'use client'
import Image from 'next/image'
import Link from 'next/link'
import gambar from '../../public/1.gif'
import Carosel from '@/components/carosel';
import { useState, useEffect } from 'react';
import { transform } from 'next/dist/build/swc';
import { motion, AnimatePresence } from "framer-motion"
export default function Home() {
  const [data, setData] = useState<any>(slideData);
  const [trans, setTrans] = useState<any>(slideData[0]);
  const [background, setBackground] = useState<any>(slideData[slideData.length - 1])
  const btnNext = () => {
    setData((prev: any) => [
      ...prev.slice(1),
      trans && trans
    ])
    setBackground(trans)
    setTrans(data[1])
  };

  const btnBack = () => {
    setBackground(trans)
    setTrans(data[data.length - 1])
    setData((prev: any) => [
      prev[prev.length - 1],
      ...prev.slice(0, prev.length - 1),
    ])
  };

  return (
    <main className='relative overflow-hidden h-[100vh] w-full'>
      <AnimatePresence>
        <img
          src={background.img}
          className='left-0 top-0 z-10 h-full w-full object-cover brightness-50'
        />
        <motion.div className='absolute z-50 top-0 flex items-center gap-48'>
          <motion.img src='/logo.png' className=' w-44 ' initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "tween", duration: 0.8 }}/>
        </motion.div>
        <div className='absolute top-0 z-20  h-[100vh] w-full'>
          {trans && (
            <motion.img
              key={trans.img}
              layoutId={trans.img}
              initial={{ scaleX: 0.2, scaleY: 0.3, x: -570, y: 120 }}
              animate={{ scaleX: 1, scaleY: 1, x: 0, y: 0 }}
              transition={{
                opacity: { ease: "linear" },
                layout: { duration: 0.6 },
              }}
              alt="Transition Image"
              className=" absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50"
              src={trans.img}
            />
          )}
          <motion.div layoutId={trans.title} key={trans.title} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "tween" }} className='absolute z-50 text-7xl font-bold text-white top-44 left-6 w-96'>
            <motion.p className='text-xl font-bold mt-3 text-orange-500' initial={{ x: -100, }} animate={{ x: 0 }} transition={{ type: "tween", duration: 0.6 }}>{trans.location}</motion.p>
            <p>
              {trans.title}
            </p>
            <motion.div className='bg-orange-500 h-1 w-9 absolute z-50 ml-14' initial={{ x: -100, }} animate={{ x: 0 }} transition={{ type: "tween", duration: 0.6 }}></motion.div>
            <motion.p className='text-xs font-medium mt-3 w-[80%]'>{trans.description}</motion.p>
            <motion.button className='text-xl px-5 py-1 border-2 rounded-full' initial={{ x: -200, }} animate={{ x: 0 }} transition={{ type: "tween", duration: 0.6, delay: 0.5 }} whileHover={{scale: 1.2}}>Location</motion.button>
          </motion.div>
          <div className='absolute flex flex-col z-30  translate-y-96 ml-7 w-full '>
            <div className='flex justify-around gap-6 items-center w-[100%]' >
              <div className='flex gap-4 w-48 justify-between'>
                <button onClick={btnBack} className='bg-slate-300 flex flex-row justify-center items-center p-3 rounded-full '>
                  <Image src={"/left.svg"} height={30} width={30} alt="left-icon" />
                </button>
                <button onClick={btnNext} className='bg-slate-300 flex flex-row justify-center items-center p-3 rounded-full'>
                  <Image src={"/right.svg"} height={30} width={30} alt="right-icon" />
                </button>
              </div>
              <div className='h-[2px] w-52 bg-white' />
              <div className='overflow-hidden relative z-30 w-[100%] h-80'>
                <div className=" flex w-full gap-6">
                  {data && data.map((item: any) => (
                    <div key={item.img}>
                      <motion.div
                        className=" relative h-64 min-w-[200px] rounded-2xl shadow-md "
                        layoutId={item.img + "transisi"}
                        initial={{ scale: 0.8, opacity: 0 }}
                        // layout
                        key={item.img + "trans"}
                        animate={{
                          scale: 1,
                          opacity: 1,
                          transition: {
                            duration: 0.9,
                          },
                        }}
                      >
                        <motion.img
                          src={item.img}
                          alt="Transition Image"
                          className={" absolute h-full w-full  rounded-2xl  object-cover brightness-75 "} />
                      </motion.div>
                    </div>
                  ))
                  }
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>

        </div>
      </AnimatePresence>
    </main>
  )
}

const slideData = [
  {
    img: "/1.png",
    location: "Switzrerland Apls",
    description:
      "The journey to Machu Picchu typically starts in the mountain city of Cusco, which was the capital city of the Inca Empire",
    title: "SAINT ANTÖNEN",
  },
  {
    img: "/2.png",
    title: "The Grand Canyon",
    description:
      "The earth's geological history opens before your eyes in a mile-deep chasm",
    location: "Arizona",
  },
  {
    img: "/3.png",
    title: "Masai Mara",
    description:
      "Wild animals in their natural environment, luxury safari lodges",
    location: "Kenya",
  },
  {
    img: "/4.png",
    title: "Angkor Wat",
    description:
      "A stunning ancient jungle city with hundreds of intricately constructed temples",
    location: "Cambodia",
  },
  {
    img: "/7.png",
    title: "Bromo",
    description:
      "Tropical beaches, volcano hikes, ancient temples, and friendly people",
    location: "Indonesia",
  },
]