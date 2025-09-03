import React from "react";

const BlogCard = ({ blog }) => {
  // Construct image URL
  const imageUrl = blog.image
    ? `https://myblog-x5a0.onrender.com/media/${blog.image}`
    : "https://via.placeholder.com/400x200?text=No+Image";

  return (
    <div className="blog-card border rounded shadow-lg overflow-hidden">
      {/* Blog Image */}
      <img
        src={imageUrl}
        alt={blog.title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          // Fallback if image fails to load
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/400x200?text=No+Image";
        }}
      />

      {/* Blog Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
        <p className="text-gray-700 mb-4">{blog.description}</p>
        <a
          href={`/blogs/${blog.id}`}
          className="text-blue-500 hover:underline"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
