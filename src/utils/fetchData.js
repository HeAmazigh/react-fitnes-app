export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7fa419b367msh9e0f8fedb9798b1p1e6c2bjsnb68f32fb382c',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7fa419b367msh9e0f8fedb9798b1p1e6c2bjsnb68f32fb382c',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
