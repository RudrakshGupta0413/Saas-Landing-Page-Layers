"use client";

import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();
    // const handleAnimationComplete = () => {
    //     console.log("All letters have animated!");
    // };

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { x: 0, y: [0, 16, 20] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);

        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.1 },
            ],
            [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
        ]);

        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { x: 0, y: [0, 20, 0] },
                { duration: 0.5 },
            ],
        ]);
    }, [leftDesignAnimate, leftDesignScope, leftPointerAnimate, leftPointerScope, rightDesignAnimate, rightDesignScope, rightPointerAnimate, rightPointerScope]);
    return (
        <motion.section
            className="py-24 overflow-x-clip"
            style={{ cursor: `url(${cursorYouImage.src}), auto` }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container relative">
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    drag
                    className="absolute -left-40 top-16 hidden lg:block"
                >
                    <Image
                        src={designExample1Image}
                        alt="Design example 1 image"
                        draggable="false"
                    />
                </motion.div>
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute left-56 top-96 hidden lg:block"
                >
                    <Pointer name="Rudraksh" />
                </motion.div>

                <motion.div
                    ref={rightDesignScope}
                    initial={{ opacity: 0, x: 100, y: 100 }}
                    className="absolute -right-64 -top-16 hidden lg:block"
                    drag
                >
                    <Image
                        src={designExample2Image}
                        alt="Design example 2 image"
                        draggable="false"
                    />
                </motion.div>
                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x: 275, y: 100 }}
                    className="absolute right-80 -top-4 hidden lg:block"
                >
                    <Pointer name="Joseph" color="red" />
                </motion.div>
                <div className="flex justify-center">
                    <div
                        className="inline-flex py-1 px-3 bg-gradient-to-r from-teal-500 to-fuchsia-400
                        rounded-full text-neutral-950 font-semibold"
                    >
                        ✨ $7.5M seed round raised
                    </div>
                </div>

                {/* <SplitText
                    text="Next-gen design, crafted for limitless impact"
                    className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 py-2"
                    delay={50}
                    animationFrom={{
                        opacity: 0,
                        transform: "translate3d(0,50px,0)",
                    }}
                    animationTo={{
                        opacity: 1,
                        transform: "translate3d(0,0,0)",
                    }}
                    easing="easeOutCubic"
                    threshold={0.05}
                    rootMargin="-50px"
                    onLetterAnimationComplete={handleAnimationComplete}
                /> */}
                {/* <BlurText
                    text="Next-gen design, crafted for limitless impact"
                    delay={150}
                    animateBy="words"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 py-2"
                /> */}

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Design tools shouldn&apos;t slow you down. Layers combines
                    powerful features with an interface that keeps in your
                    creative flow.
                </p>
                <form className="flex border border-white/15 rounded-full p-2 mt-8 md:max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 md:flex-1"
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        className="whitespace-nowrap"
                        size="sm"
                    >
                        {" "}
                        Sign Up
                    </Button>
                </form>
            </div>
        </motion.section>
    );
}
