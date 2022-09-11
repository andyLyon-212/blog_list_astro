import React from 'react';
import moment from 'moment';

const getDateString= (date) => {
  const newDate = moment(date).format('LLLL');
  return newDate
}

const Characters = ({ characters }) => {
  return (
    <div className="flex flex-row md:flex-col sm:flex-col space-x-4">
      {characters.posts.map(character => {
        return (
          <div key={character.id}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black">
               <img className="w-full h-48" src={character.feature_image} alt={`Image of ${character.slug}`}/>
               <div className="px-6 py-4">
                 <div className="font-bold text-md mb-2 underline text-slate-50"> { getDateString(character.published_at) } </div>
                 <span class="w-full p-0.5 bg-green-600 lg:w-1/3"></span>
                 <div className="font-bold text-xl mb-2 text-slate-50"> { character.title} </div>
                 <p className="text-slate-300 text-base truncate">
                 { character.excerpt}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Characters;
