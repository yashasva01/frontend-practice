import { Dispatch, SetStateAction } from 'react';
import { BlogData } from './blogPosts';

export interface BlogPostContextType {
  allBlogData: BlogData[] | null;
  setAllBlogData: Dispatch<SetStateAction<BlogData[] | []>>;
}
