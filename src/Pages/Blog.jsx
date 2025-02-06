import React , { useState } from 'react'
import Navbar from '../layout/Navbar'

const initialPosts = [
  {
    id: 1,
    title: 'Getting Started with Web Development',
    excerpt: 'Learn the fundamentals of modern web development...',
    date: 'March 15, 2024',
    category: 'Web Development',
    tags: ['Beginner', 'HTML', 'CSS'],
    image: 'https://picsum.photos/800/400?random=1'
  },
  {
    id: 2,
    title: 'Mastering React Hooks',
    excerpt: 'A deep dive into React Hooks and state management...',
    date: 'March 14, 2024',
    category: 'React',
    tags: ['Advanced', 'Hooks'],
    image: 'https://picsum.photos/800/400?random=2'
  },
];
const Blog = () => {
  const [posts, setPosts] = useState(initialPosts);



  return (
    <div>
        <Navbar/>
    <div className="min-h-screen bg-black mt-3">
    
      <section className="bg-blue-900 py-12 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="bg-black p-6 rounded-lg shadow-xl">
            <img 
              src="https://picsum.photos/1200/600?random=3" 
              alt="Featured Post" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="space-y-4">
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">Featured</span>
              <h2 className="text-3xl text-blue-400 font-bold">Latest Trends in Web Development</h2>
              <p className="text-gray-300">Discover the newest technologies shaping the future of web development...</p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-colors">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      <main className="py-12 px-4 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl text-blue-400 font-bold mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <article 
                key={post.id}
                className="bg-blue-900 rounded-lg overflow-hidden shadow-xl hover:transform hover:scale-105 transition-all duration-300"
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-red-500 text-sm">{post.category}</span>
                    <span className="text-gray-400 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl text-white font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span 
                        key={tag}
                        className="bg-black text-blue-400 px-3 py-1 rounded-full text-sm hover:bg-blue-800 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
   
    </div>
    </div>
  )
}

export default Blog
