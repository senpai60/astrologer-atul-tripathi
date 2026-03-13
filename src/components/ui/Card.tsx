export interface CardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  imageUrl: string;
  handleClick: (id: string) => void;
}

const Card = ({
  id,
  title,
  description,
  category,
  date,
  imageUrl,
  handleClick,
}: CardProps) => {
  return (
    <article className="group relative w-full max-w-[420px] bg-(--bg-surface) rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-zinc-800/60 shadow-sm hover:shadow-2xl hover:shadow-(--accent)/10 transition-all duration-500 flex flex-col gap-3 sm:gap-5 cursor-pointer">
      {/* Image Container */}
      <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-800">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle overlay gradient on hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <div className="flex flex-col flex-1 px-1">
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-(--accent)/10 text-(--accent) text-[10px] sm:text-[11px] font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-(--accent) animate-pulse"></span>
            {category}
          </span>
          <span className="inline-flex items-center text-(--text-light) text-[11px] sm:text-xs font-medium tracking-wide">
            {date}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-[17px] sm:text-[22px] font-bold text-(--text-primary) leading-snug mb-2 sm:mb-3 group-hover:text-(--accent) transition-colors duration-300 line-clamp-2">
          {title}
        </h2>

        {/* Description */}
        <p className="text-[13px] sm:text-sm text-(--text-light) leading-relaxed mb-4 sm:mb-6 line-clamp-3">
          {description}
        </p>

        {/* Read More / Call to Action */}
        <div
          onClick={() => handleClick(id)}
          className="mt-auto pt-3 sm:pt-4 border-t border-zinc-800/70 flex justify-between items-center"
        >
          <span className="inline-flex items-center gap-2 text-[13px] sm:text-sm font-bold text-(--text-primary) group-hover:text-(--accent) transition-colors duration-300">
            Read Prediction
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1.5 stroke-(--accent)"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
};

export default Card;
