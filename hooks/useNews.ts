import { useEffect, useState } from "react";

type Post = {
  id: string;
  title: string;
  content: string;
  published: string;
  updated: string;
};

export const useNews = () => {
  const URL =
    "https://www.googleapis.com/blogger/v3/blogs/7774721030175999739/posts?key=";
  const [news, setNews] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const refresh = async () => {
    try {
      if (process.env.NEXT_PUBLIC_API_KEY !== undefined) setIsLoading(true);
      const fetchData = await fetch(
        `${URL + process.env.NEXT_PUBLIC_API_KEY}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const response = await fetchData.json();
      setNews(response.items);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return {
    news,
    isLoading,
    refresh,
  };
};
