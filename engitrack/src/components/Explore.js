import cardData from "./cardData";
export default function Explore() {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pl-6 pr-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href={card.link}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {card.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {card.description}
            </p>
            <a
              href={card.link}
              className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white ${card.bgColor} rounded-lg hover:${card.hoverBgColor} focus:ring-4 focus:outline-none ${card.focusRingColor} dark:${card.darkBgColor} dark:hover:${card.darkHoverBgColor} dark:focus:ring-${card.darkFocusRingColor}`}
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    );
  }