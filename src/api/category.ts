import useSWR from 'swr'
import axios from 'axios'

const fetcher = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};
const BASE_URL = 'https://opentdb.com/api_category.php';
const useCategories = () => {
  const { data } = useSWR(BASE_URL, fetcher);
  return {
    categories: data?.trivia_categories ? data?.trivia_categories : [],
    isLoading: false,
    isError: false,
  };
};
export {
  useCategories
};