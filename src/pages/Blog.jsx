// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  const blogs = [
    { id: 1, title: 'Blog Post 1', description: 'This is a description of the first blog post.' },
    { id: 2, title: 'Blog Post 2', description: 'This is a description of the second blog post.' },
    { id: 3, title: 'Blog Post 3', description: 'This is a description of the third blog post.' },
    { id: 4, title: 'Blog Post 4', description: 'This is a description of the fourth blog post.' },
    { id: 5, title: 'Blog Post 5', description: 'This is a description of the fifth blog post.' },
    // Add more blog posts as needed
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('data:image/jpeg;base64,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')` }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen p-6">
        <h1 className="text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg">
          Latest Blog Posts
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-xl rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <img 
                src={`https://via.placeholder.com/500x300?text=Image+${blog.id}`} 
                alt={blog.title} 
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-800">{blog.title}</h2>
                <p className="text-gray-600 mt-2">{blog.description}</p>
                <Link 
                  to={`/blog/${blog.id}`} 
                  className="mt-4 inline-block text-blue-500 hover:underline font-bold"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
