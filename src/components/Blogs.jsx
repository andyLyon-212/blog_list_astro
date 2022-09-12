import React from 'react';
import moment from 'moment';

const getDateString= (date) => {
  const newDate = moment(date).format('LLLL');
  return newDate
}

const Blogs = ({ blogs }) => {
  return (
    <div className="flex md:flex-row sm:flex-col space-x-4" >
      {blogs.posts.map(post => {
        return (
          <a key={post.id} href={post.url}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black">
               <img className="w-full h-48" src={post.feature_image} alt={`Image of ${post.slug}`}/>
               <div className="px-6 py-4 md:mt-0 md:ml-6">
                 <div className="font-bold text-md mb-2 underline text-slate-50"> { getDateString(post.published_at) } </div>
                 <span className="w-full p-0.5 bg-violet-900 lg:w-1/3"></span>
                 <div className="font-bold text-xl mb-2 text-slate-50"> { post.title} </div>
                 <p className="text-slate-300 text-base truncate">
                 { post.excerpt}
                </p>
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}
export default Blogs;
