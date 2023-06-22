"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dance from "@/public/dance.webp";

export default function OrderConfirmed() {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <div>
        <h1>Your order has been placed 🚀</h1>
        <h2>Check your email for the reciept.</h2>
        <Image src={dance} className="py-8" alt="dancing man" width={400} />
      </div>
    </motion.div>
  );
}
