import * as React from 'react';
import { BlogData, BlogPostContextType } from '../types';

export const BlogPostContext = React.createContext({} as BlogPostContextType);

interface BlogProviderProps {
  children: JSX.Element;
}

export const BlogPostProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const [allBlogData, setAllBlogData] = React.useState<BlogData[]>([]);
  return (
    <BlogPostContext.Provider value={{ allBlogData, setAllBlogData }}>
      {children}
    </BlogPostContext.Provider>
  );
};
