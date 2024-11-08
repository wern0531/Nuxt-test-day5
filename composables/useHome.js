import axios from "axios";
export const useHome = () => {
  const newsList = ref([]);
  const isLoading = ref(false);

  const getApiData = async () => {
    const url = "https://nuxr3.zeabur.app/api/v1/home/news/";
    isLoading.value = true;

    try {
      const req = await axios(url);
      if (true) {
        newsList.value = req.data.result;
        setTimeout(() => {
          isLoading.value = false;
        }, "2000");
        return;
      }
    } catch (err) {}
  };

  return { newsList, isLoading, getApiData };
};
