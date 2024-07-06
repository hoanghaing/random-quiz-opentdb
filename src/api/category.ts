import useSWR from 'swr'
import axios from 'axios'
 
const fetcher = async (url: string) => {
  const { data } = await axios.get(url);
  console.log('data: ', data);
  return data;
};
const useCategories = () => {
  const { data } = useSWR('https://opentdb.com/api_category.php', fetcher);
  return {
    categories: data?.trivia_categories ? data?.trivia_categories : [],
    isLoading: false,
    isError: false,
  };
};
export {
  useCategories
};