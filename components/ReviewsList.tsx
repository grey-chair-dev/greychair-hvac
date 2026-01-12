
import React from 'react';

export interface ReviewData {
  name: string;
  date: string;
  location: string;
  tech: string;
  text: string;
  rating: number;
}

const reviews: ReviewData[] = [
  {
    name: "Mark J.",
    date: "November 2023",
    location: "Blue Ash",
    tech: "Brian",
    text: "Had an issue with the furnace not kicking on during the first frost. Brian was professional and got here inside the 2-hour window. He explained that the igniter was failing. Everything is working fine now.",
    rating: 5
  },
  {
    name: "Sarah W.",
    date: "August 2023",
    location: "Hyde Park",
    tech: "Mike",
    text: "The AC unit was making a loud humming noise. Mike identified it as a loose mounting bracket and a worn fan belt. He was quick with the repair and didn't try to upsell me. It's refreshing to deal with an honest company in Cincinnati.",
    rating: 5
  },
  {
    name: "Dave L.",
    date: "January 2024",
    location: "West Chester",
    tech: "Steve",
    text: "Main drain backup on a Saturday morning. Steve arrived within the hour. It took him a while to clear the roots out of the line, but he stuck to the original flat-rate quote he gave me at the start. Very professional.",
    rating: 4
  },
  {
    name: "Ellen R.",
    date: "October 2023",
    location: "Anderson",
    tech: "Chris",
    text: "Chris performed an electrical safety inspection for us. He found a few double-tapped breakers in the panel. He was very clear about the risks without being pushy about the repair. Very knowledgeable guy.",
    rating: 5
  },
  {
    name: "Robert T.",
    date: "December 2023",
    location: "Kenwood",
    tech: "Anthony",
    text: "Boiler was leaking from the relief valve. Anthony diagnosed a failed expansion tank. He had the parts ready and finished the job in under two hours. Fair pricing and straightforward communication.",
    rating: 5
  },
  {
    name: "Linda K.",
    date: "September 2023",
    location: "Mount Lookout",
    tech: "David",
    text: "Called about a faulty outdoor outlet. David found a short in the wiring that was causing the GFCI to trip. He fixed it quickly and double-checked our other outdoor lights. Good, local Cincinnati service.",
    rating: 5
  }
];

const ReviewsList: React.FC<{ limit?: number }> = ({ limit }) => {
  const displayReviews = limit ? reviews.slice(0, limit) : reviews;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayReviews.map((review, idx) => (
        <div 
          key={idx} 
          className={`bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full animate-fade-in-up stagger-${(idx % 4) + 1} opacity-0 fill-mode-forwards hover:shadow-lg transition-shadow`}
        >
          <div className="flex text-yellow-500 mb-4">
            {[...Array(review.rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-slate-700 mb-6 italic leading-relaxed flex-grow">"{review.text}"</p>
          <div className="pt-6 border-t border-slate-50">
            <div className="flex justify-between items-start mb-1">
              <span className="font-bold text-slate-900">{review.name}</span>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-tighter">Verified Owner</span>
            </div>
            <div className="text-xs text-slate-400 font-medium">
              {review.date} • {review.location}
            </div>
            <div className="mt-2 text-xs font-semibold text-slate-500 bg-slate-100 inline-block px-2 py-1 rounded">
              Technician: {review.tech}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsList;
