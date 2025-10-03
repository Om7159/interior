import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { BlogPost } from "@/entities/BlogPost";
import { Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { format } from "date-fns";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const data = await BlogPost.list("-created_date");
    setPosts(data);
  };

  return (
    <div className="bg-[#FAFAF8]">
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{fontFamily: "'Cormorant Garamond', serif"}}>
              Design <span className="text-[#C9A55A]">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ideas, inspiration, and expert advice for your space
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link to={createPageUrl("BlogPost") + `?id=${post.id}`}>
                  <div className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      {post.category && (
                        <span className="text-[#C9A55A] text-sm font-semibold">{post.category}</span>
                      )}
                      <h3 className="text-2xl font-bold text-[#2C2C2C] mb-3 mt-2 group-hover:text-[#C9A55A] transition-colors" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                        {post.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{format(new Date(post.created_date), "MMM d, yyyy")}</span>
                        {post.read_time && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.read_time}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
