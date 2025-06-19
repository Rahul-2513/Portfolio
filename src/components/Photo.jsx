"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full flex justify-center items-center py-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
        >
          <div className="relative w-[270px] h-[270px] rounded-full overflow-hidden sm:mr-52">
            {/* Animated segmented ring */}
            <motion.svg
              className="absolute -inset-[8px] w-[calc(100%+16px)] h-[calc(100%+16px)] z-10 drop-shadow-[0_0_6px_#00ff99]"
              viewBox="0 0 300 300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="150"
                cy="150"
                r="140"
                stroke="#00ff99"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                animate={{
                  rotate: [0, 360],
                  strokeDasharray: [
                    "15 120 25 25",
                    "16 25 92 72",
                    "4 250 22 22",
                    "12 80 35 43",
                    "18 65 40 30",
                  ],
                }}
                transition={{
                  strokeDasharray: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              />
            </motion.svg>

            {/* Profile Image */}
            <Image
              src="/profile.png"
              alt="profile"
              priority
              quality={100}
              fill
              className="object-cover z-0"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
