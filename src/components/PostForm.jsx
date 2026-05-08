import { useState } from "react";

import { addPost } from "../services/api";

export default function PostForm() {

    const [name, setName] = useState("");

    const [post, setPost] = useState("");

    const [status, setStatus] = useState("");



    const handleSubmit = async () => {

        if (!name || !post) {

            setStatus("Fill all fields");
            setTimeout(() => setStatus(""), 3000);

            return;
        }

        setStatus("Posting...");

        try {

            await addPost({
                name,
                post
            });

            setStatus("Post Done");

            setName("");

            setPost("");

            setTimeout(() => setStatus(""), 3000);
        }

        catch (error) {

            console.log(error);

            setStatus("Something went wrong");

            setTimeout(() => setStatus(""), 3000);
        }
    };



    return (

        <div
            className="
      max-w-xl
      mx-auto
      bg-white/5
      backdrop-blur-2xl
      p-8
      rounded-[30px]
      border
      border-cyan-400/20
      shadow-[0_0_50px_rgba(0,255,255,0.15)]
      hover:shadow-cyan-500/30
      transition-all
      duration-500
      "
        >

            {/* Name Input */}

            <input
                type="text"

                placeholder="Your Name"

                value={name}

                onChange={(e) => setName(e.target.value)}

                className="
        w-full
        p-4
        rounded-2xl
        mb-4
        bg-black/40
        text-white
        border
        border-cyan-400/20
        outline-none
        focus:border-cyan-400
        "
            />



            {/* Post Textarea */}

            <textarea

                placeholder="Write something..."

                value={post}

                onChange={(e) => setPost(e.target.value)}

                className="
        w-full
        h-32
        p-4
        rounded-2xl
        mb-4
        bg-black/40
        text-white
        border
        border-cyan-400/20
        outline-none
        focus:border-cyan-400
        "
            />



            {/* Submit Button */}

            <button

                onClick={handleSubmit}

                className="
        bg-cyan-400
        hover:bg-cyan-300
        hover:scale-105
        transition-all
        duration-300
        px-8
        py-4
        rounded-2xl
        text-black
        font-bold
        shadow-lg
        shadow-cyan-500/30
        "
            >

                Post Now

            </button>

            {status && (
                <p className="mt-4 text-center text-cyan-300 font-medium animate-pulse">
                    {status}
                </p>
            )}

        </div>
    );
}