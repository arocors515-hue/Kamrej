import React, { useState } from 'react';
import { Maximize2, X, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData.ts';
import { GalleryItem } from '../types.ts';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Training', 'Equipment', 'Atmosphere'];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#0F0F0F] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-red-500 font-bold uppercase text-xs sm:text-sm tracking-widest mb-3">
            Inside The Iron Sanctum
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white font-heading tracking-tight">
            Gym Gallery & Atmosphere
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 mb-6" />
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed [text-wrap:balance]">
            Explore the authentic environment at Kamaraj Gym: heavy cast iron, knurled bars, chalk-dusted floors, and lifters dedicated to honest physical progress.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  activeCategory === cat
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isMarquee = index === 0;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className={`group relative rounded-lg overflow-hidden border border-white/10 bg-neutral-900 cursor-pointer shadow-lg hover:border-red-600/50 transition-all ${
                  isMarquee ? 'sm:col-span-2 lg:col-span-2 aspect-16/9' : 'aspect-4/3'
                }`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                {/* Overlay Text & Category */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-500 block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold uppercase text-white font-heading tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-300 line-clamp-1 mt-0.5">
                      {item.caption}
                    </p>
                  </div>

                  <div className="p-2 rounded-full bg-white/10 group-hover:bg-red-600 text-white transition-colors shrink-0">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#121212] border border-white/15 rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 hover:bg-red-600 text-white transition-colors cursor-pointer"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo */}
            <div className="relative aspect-16/9 sm:aspect-16/10 bg-black">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Caption Strip */}
            <div className="p-5 sm:p-6 bg-[#161616] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-500 font-heading block mb-0.5">
                  {selectedPhoto.category} · Kamaraj Gym
                </span>
                <h4 className="text-xl font-bold uppercase text-white font-heading">
                  {selectedPhoto.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                  {selectedPhoto.caption}
                </p>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="self-start sm:self-center px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold rounded uppercase tracking-wider transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
