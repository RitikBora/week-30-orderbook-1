"use client";
import Image from "next/image";
import { PrimaryButton, SuccessButton } from "./components/core/Button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const parentVariants = {
  animate: {
    transition: {
      staggerChildren: 0.3, 
    },
  },
};

const childVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const childVariantsDown = {
  initial: { opacity: 0, y: 0 },
  animate: { opacity: 1, y: 20, transition: { duration: 0.6 } },
}

export default function Home() {
  const router = useRouter();
  
  return (
    <motion.div
      className="h-auto grid grid-cols-3"
      variants={parentVariants}
      initial="initial"
      animate="animate"
    >
      <div className="col-span-2 m-16">
        <motion.div
          className="text-white font-bold"
          style={{ fontSize: "5rem" }}
          variants={childVariants}
        >
          Look First/
        </motion.div>
        
        <motion.div
          className="text-white font-bold"
          style={{ fontSize: "5rem" }}
          variants={childVariants}
        >
          Then Leap.
        </motion.div>
        
        <motion.div
          className="text-white font-bold"
          style={{ fontSize: "1.5rem" }}
          variants={childVariants}
        >
          <p className="pt-5 text-slate-500 text-lg leading-snug">The best trades require research, then <br />commitment.</p>
        </motion.div>
        
       
          <motion.div className="py-10 mr-2 flex" variants={childVariantsDown}>
            <SuccessButton onClick={() => router.push("/markets")}>
              Explore Markets
            </SuccessButton>
            <PrimaryButton onClick={() => router.push("/trade/SOL_USDC")}>
              Solana
            </PrimaryButton>
          </motion.div>
          

        
      </div>
      
      <div className="col-span-1 relative">
        <div className="absolute bottom-0 right-24 text-white">
          <div style={{ fontSize: "1.5rem" }}>XChange.inc</div>
          <div className="text-gray-400 flex justify-end" style={{ fontSize: "1rem" }}>
            CEO: Ritik Bora
          </div>
        </div>
      </div>
    </motion.div>
  );
}
