import cricket from '../assets/awards/cricket-winners.png';
import volleyball from '../assets/awards/volley-ball-winner.png';
import chess from '../assets/awards/chess-runner-up.png';

const awards = [
    {
      image: cricket,
      title: "Cricket Tournament Winner",
      subtitle: "Agile Infoways Pvt. Ltd.",
      year: "2016",
    },
    {
      image: volleyball,
      title: "Volleyball Tournament Winner",
      subtitle: "Agile Infoways Pvt. Ltd.",
      year: "2016",
    },
    {
      image: chess,
      title: "Chess Runner-up",
      subtitle: "Agile Infoways Pvt. Ltd.",
      year: "2016",
    },
  ];
  
  const Award = () => (
    <section id="awards" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6 dark:text-white">
          Awards
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 dark:text-gray-400">
          Recognition and achievements that highlight my contributions and excellence in various fields.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg p-10 shadow-md dark:bg-gray-800 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={award.image}
                alt={award.title}
                className="w-40 h-40 object-contain mb-8"
              />
              <div className="text-xl font-semibold text-center text-blue-700 dark:text-blue-400">
                {award.title}
              </div>
              <div className="mt-3 text-center text-gray-700 dark:text-gray-300 font-medium">
                {award.subtitle}
              </div>
              <div className="mt-1 text-center text-gray-500 dark:text-gray-400">
                {award.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Award;