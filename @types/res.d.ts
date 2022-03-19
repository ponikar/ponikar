export interface ProjectRes {
  owner: string;
  repo: string;
  link: string;
  description: string;
  image: string;
  language: string;
  languageColor: string;
  stars: string;
  forks: string;
}

export interface BlogRes {
  id: string;
  title: string;
  description: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  published_timestamp: number;
  positive_reactions_count: number;
  cover_image: string;
  reading_time_minutes: number;
  tag_list: string[];
}
