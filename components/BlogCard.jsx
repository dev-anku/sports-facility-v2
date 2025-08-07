'use client';

import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ blog }) => {
  return (
    <div className="border rounded-md shadow-md overflow-hidden bg-white hover:shadow-xl transition">
      <Link href={`/blogs/${blog.slug}`}>
        <div className="relative w-full h-56">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 flex flex-col justify-between h-60">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {blog.excerpt}
          </p>
          <button className="bg-black text-white px-4 py-2 text-sm rounded-md w-fit self-start">
            READ MORE.
          </button>
          <p className="text-xs text-gray-400 mt-3">{blog.date}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
