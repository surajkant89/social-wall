import { motion } from "framer-motion";

export default function PostCard({ item }) {

    return (

        <motion.div

            whileHover={{
                scale: 1.03,
                rotateX: 5,
                rotateY: 5,
            }}

            transition={{
                type: "spring",
                stiffness: 200,
            }}

            className="
      bg-white/5
      backdrop-blur-2xl
      border
      border-cyan-400/20
      rounded-[30px]
      p-6
      shadow-[0_0_40px_rgba(0,255,255,0.1)]
      hover:shadow-cyan-500/20
      transition-all
      duration-500
      "
        >

            {/* Name */}

            <h2 className="
        text-2xl
        font-bold
        text-cyan-300
      ">
                {item.name}
            </h2>

            {/* Post */}

            <p className="
        mt-4
        text-lg
        text-white/90
      ">
                {item.post}
            </p>

            {/* Time */}

            <p className="
        text-sm
        text-white/40
        mt-4
      ">
                {item.time}
            </p>

        </motion.div>
    );
}