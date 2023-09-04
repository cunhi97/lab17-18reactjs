const apiHttp = "https://react-study-http-c44ad-default-rtdb.firebaseio.com/";

export async function fetchMovies() {

  const response = await fetch(`${apiHttp}/movies.json`);
  const data = await response.json()
  
  if(!response.ok){
    throw new Error(data.message || 'Could not fetch quotes.');

  }

  const TransformedMovies = [];

  for(const key in data) {
    const movieObj = {
        id: key,
        ...data[key]
    }
    TransformedMovies.push(movieObj)
    console.log("response", response)
    console.log("data", data)
    console.log("TransformedMovies", TransformedMovies)
  }
  return TransformedMovies;
}