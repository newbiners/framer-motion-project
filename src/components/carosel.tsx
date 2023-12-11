import Image from "next/image";
import React, { Dispatch } from "react";
import { useState } from "react";

type CarouselProps = {
    data: any;
    setData: Dispatch<React.SetStateAction<any>>;
    trans: any;
    setTrans: Dispatch<React.SetStateAction<any>>;
    children?: any;
};

const Carousel = ({ data, setData, trans, setTrans, children }: CarouselProps) => {
    const [move, setMove] = useState<number>(0);

    const btnNext = () => {
        setMove((prev) => (prev === data.length - 1 ? 0 : prev + 1)); // Increment move
    };

    const btnBack = () => {
        setMove((prev) => (prev === 0 ? data.length - 1 : prev - 1)); // Decrement move
    };
    console.log(move, "move")
    return (
        <div className="w-[70%] relative z-20 top-0 overflow-hidden">
            <div className="flex justify-between z-50 top-8 px-4 absolute items-center">
                <div>
                    <button onClick={btnBack}>
                        <Image src={"/left.svg"} height={30} width={30} alt="left-icon" />
                    </button>
                    <button onClick={btnNext}>
                        <Image src={"/right.svg"} height={30} width={30} alt="right-icon" />
                    </button>
                </div>
                <div className="h-[1px] w-[30rem] bg-white" />
                <p className="text-white text-xl">{move + 1}</p>
            </div>
            <div className=" transition-transform ease-out duration-1000 bg-orange-500 flex relative" style={{ transform: `translateX(-${move * 100}%)` }} >
                {children}
            </div>
        </div>
    );
};

export default Carousel;
