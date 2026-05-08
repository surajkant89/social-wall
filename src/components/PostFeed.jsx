import { useEffect, useState } from "react";

import { getPosts } from "../services/api";

import PostCard from "./PostCard";

export default function PostFeed() {

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {

        try {

            const data = await getPosts();

            setPosts(data.reverse());
        }

        catch (error) {

            console.log(error);
        }
    };



    useEffect(() => {

        fetchPosts();

        const interval = setInterval(() => {

            fetchPosts();

        }, 3000);

        return () => clearInterval(interval);

    }, []);




    return (

        <div className="
      max-w-3xl
      mx-auto
      mt-10
      px-5
      space-y-6
    ">

            {

                posts.map((item, index) => (

                    <PostCard
                        key={index}
                        item={item}
                    />

                ))

            }

        </div>
    );
}