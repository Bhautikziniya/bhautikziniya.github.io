import { useState, useEffect } from 'react';
import { Code, Trophy, Target, Clock } from 'lucide-react';
import CountUp from 'react-countup';
import { fetchLeetCodeStats, LeetCodeStats } from '../utils/leetcode';

const LEETCODE_USERNAME = 'HtiGuleZ1S'; // Replace with your LeetCode username

const LeetCode = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const loadStats = async () => {
      try {
        const leetCodeStats = await fetchLeetCodeStats(LEETCODE_USERNAME);
        setStats(leetCodeStats);
        setError(null);
      } catch (err) {
        setError('Failed to load LeetCode statistics');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('leetcode');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <section id="leetcode" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !stats) {
    return (
      <section id="leetcode" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-red-600 dark:text-red-400">
            {error || 'Failed to load LeetCode statistics'}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="leetcode" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6 dark:text-white">
          LeetCode Statistics
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 dark:text-gray-400">
          My coding journey on LeetCode, showcasing problem-solving skills and algorithmic expertise.
        </p>
        
        <div 
          className={`max-w-4xl mx-auto transition-all duration-1000 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Solved */}
            <div className="bg-white rounded-lg p-6 shadow-md dark:bg-gray-900 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-blue-600 mr-3 dark:text-blue-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Total Solved
                </h3>
              </div>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                <CountUp
                  end={stats.totalSolved}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </p>
            </div>

            {/* Difficulty Distribution */}
            <div className="bg-white rounded-lg p-6 shadow-md dark:bg-gray-900 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-green-600 mr-3 dark:text-green-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Difficulty
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Easy</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    <CountUp
                      end={stats.easySolved}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Medium</span>
                  <span className="font-semibold text-yellow-600 dark:text-yellow-400">
                    <CountUp
                      end={stats.mediumSolved}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Hard</span>
                  <span className="font-semibold text-red-600 dark:text-red-400">
                    <CountUp
                      end={stats.hardSolved}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </span>
                </div>
              </div>
            </div>

            {/* Ranking */}
            <div className="bg-white rounded-lg p-6 shadow-md dark:bg-gray-900 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <Trophy className="w-6 h-6 text-yellow-600 mr-3 dark:text-yellow-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Ranking
                </h3>
              </div>
              <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                #<CountUp
                  end={stats.ranking}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                  separator=","
                />
              </p>
            </div>

            {/* Acceptance Rate */}
            <div className="bg-white rounded-lg p-6 shadow-md dark:bg-gray-900 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-purple-600 mr-3 dark:text-purple-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Acceptance Rate
                </h3>
              </div>
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                <CountUp
                  end={stats.acceptanceRate}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                  decimals={1}
                  suffix="%"
                />
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href={`https://leetcode.com/${LEETCODE_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
            >
              View My LeetCode Profile
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeetCode; 