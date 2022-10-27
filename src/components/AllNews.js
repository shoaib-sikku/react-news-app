import {useState} from 'react'

const AllNews = () => {
  //you have to  write hare js
  const [data, setdata] = useState([]);
  fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=bc5a2de0b3b84da09d6fb3e70d7eee12')
    .then((reponce) => {
      return reponce.json();
    })
    .then((data) => {
      console.log(data)
      setdata(data.articles);
    });
  return (
  <>
     {
      data.map((news)=>{
        return (
          <>
             <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={news.urlToImage} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{news.title}</h5>
        <p class="card-text">{news.description}</p>
        <a href={news.url}>Read more...</a>
      </div>
    </div>
  </div>
</div>
          </>
        )
      })
     }
  </>
  )
}

export default AllNews
