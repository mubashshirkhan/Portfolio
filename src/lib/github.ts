export interface ContributionDay {
  date: string;
  contributionCount: number;
  contributionLevel: string;
  color: string;
  weekday: number;
}

export interface ContributionWeek {
  firstDay: string;
  contributionDays: ContributionDay[];
}

export interface ContributionMonth {
  name: string;
  year: number;
  firstDay: string;
  totalWeeks: number;
}

export interface ContributionCalendar {
  year: number;
  totalContributions: number;
  colors: string[];
  months: ContributionMonth[];
  weeks: ContributionWeek[];
}

interface GitHubResponse {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: Omit<ContributionCalendar, "year">;
      };
    };
  };
  errors?: Array<{ message?: string }>;
}

export async function fetchContributions(year: number): Promise<ContributionCalendar> {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;
  if (!username || !token) throw new Error("GitHub contribution service is not configured.");

  const from = `${year}-01-01T00:00:00Z`;
  const to = `${year}-12-31T23:59:59Z`;
  const query = `query Contributions($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions colors
          months { name year firstDay totalWeeks }
          weeks { firstDay contributionDays { date contributionCount contributionLevel color weekday } }
        }
      }
    }
  }`;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { username, from, to } }),
    next: { revalidate: 3600, tags: [`github-contributions-${year}`] },
  });
  if (!response.ok) throw new Error("GitHub contribution data is temporarily unavailable.");
  const payload = (await response.json()) as GitHubResponse;
  if (payload.errors?.length || !payload.data?.user?.contributionsCollection?.contributionCalendar) {
    throw new Error("Unable to load GitHub contributions right now.");
  }
  return { year, ...payload.data.user.contributionsCollection.contributionCalendar };
}
