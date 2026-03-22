import galleryData from '../content/gallery.json'

interface GalleryItem {
  id: string
  title: string
  tag: string
  image: string
}

export default function Portfolio() {
  const items: GalleryItem[] = galleryData.items

  return (
    <section id="portfolio" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-[#080c18]" />

      <div className="relative z-10 section-container">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <div className="gold-line-center" />
          <p className="section-tag mb-4">Gallery</p>
          <h2 className="font-display-serif text-4xl md:text-5xl text-white">
            작품 갤러리
          </h2>
          <p className="font-korean text-white/40 mt-4 max-w-xl mx-auto">
            직접 만든 공간 이미지들을 소개합니다.
          </p>
        </div>

        {items.length === 0 ? (
          /* Empty state */
          <div className="text-center py-24 reveal">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-white/10 flex items-center justify-center">
              <svg className="w-7 h-7 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="font-korean text-white/30 text-sm mb-2">아직 등록된 이미지가 없습니다</p>
            <p className="font-korean text-white/20 text-xs">
              <a href="/admin" className="underline underline-offset-2 hover:text-gold/60 transition-colors">/admin</a>에서 이미지를 추가해보세요
            </p>
          </div>
        ) : (
          /* Gallery grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, i) => (
              <div
                key={item.id}
                className="reveal group relative aspect-square overflow-hidden cursor-pointer"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                flex flex-col items-center justify-center gap-3">
                  <p className="font-display-serif text-2xl text-white italic">{item.title}</p>
                  {item.tag && (
                    <p className="font-korean text-white/50 text-xs tracking-widest">{item.tag}</p>
                  )}
                  <div className="w-8 h-px bg-gold/60 mt-2" />
                </div>

                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy/80 to-transparent">
                  <p className="font-korean text-white/70 text-sm font-medium">{item.title}</p>
                  {item.tag && (
                    <p className="font-korean text-white/40 text-xs mt-0.5">{item.tag}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
