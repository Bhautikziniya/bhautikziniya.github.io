export interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
}

export async function fetchLeetCodeStats(username: string): Promise<LeetCodeStats> {
  try {
    // Using a public API endpoint
    const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.status === 'error') {
      throw new Error(data.message || 'Failed to fetch LeetCode stats');
    }

    return {
      totalSolved: data.totalSolved,
      easySolved: data.easySolved,
      mediumSolved: data.mediumSolved,
      hardSolved: data.hardSolved,
      acceptanceRate: Math.round(data.acceptanceRate),
      ranking: data.ranking,
      contributionPoints: data.contributionPoints
    };
  } catch (error) {
    console.error('Error fetching LeetCode stats:', error);
    throw error;
  }
} 