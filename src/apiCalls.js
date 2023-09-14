export default function getData() {
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(apiKey)
  return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
    .then(response => response.json())
}