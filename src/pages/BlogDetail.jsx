// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams, Link } from 'react-router-dom';

function BlogDetail() {
  // Assuming each blog post has an ID, title, content, date, and image URL
  const { id } = useParams();

  const blogs = [
    { 
      id: 1, 
      title: 'Blog Post 1', 
      content: 'This is the detailed content of the first blog post. It can contain paragraphs, images, and other content to explain the topic.',
      date: 'December 1, 2024',
      image: 'https://th.bing.com/th?q=Blue+Rasin+BG&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247' // Placeholder image
    },
    { 
      id: 2, 
      title: 'Blog Post 2', 
      content: 'This is the detailed content of the second blog post. It provides more in-depth information on the topic.',
      date: 'December 2, 2024',
      image: 'https://via.placeholder.com/800x400?text=Blog+Post+2' // Placeholder image
    },
    { 
      id: 3, 
      title: 'Blog Post 3', 
      content: 'This is the detailed content of the third blog post. Here, we dive into even more details.',
      date: 'December 3, 2024',
      image: 'https://via.placeholder.com/800x400?text=Blog+Post+3' // Placeholder image
    },
    // Add more blog posts as needed
  ];

  const blog = blogs.find((post) => post.id === parseInt(id)); // Find the blog post by ID

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-600">Blog post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-extrabold text-gray-800">{blog.title}</h1>
        <p className="text-sm text-gray-500 mt-2">{blog.date}</p>
        
        {/* Display the blog image */}
        <img src={blog.image} alt={blog.title} className="mt-6 w-full h-64 object-cover rounded-lg" />
        
        <div className="mt-6 text-lg text-gray-700">
          <p>{blog.content}</p>
        </div>
        
        <Link 
          to="/" 
          className="mt-6 inline-block text-blue-500 hover:underline font-semibold"
        >
          Back to Blog List
        </Link>
      </div>
    </div>
  );
}

export default BlogDetail;
