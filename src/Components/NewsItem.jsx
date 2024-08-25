import image from '../assets/news1.jpg';


const NewsItem = ({ date, sourceName, author, title, description, src, url }) => {
  return (
    <div 
      className="card bg-dark text-light mb-3 d-inline-block my-4 mx-4 px-2 py-2" 
      style={{ maxWidth: "380px", minHeight: "400px" }}>
        <img src={src ? src : image} style={{ height: "200px", width: "100%" }} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column">
          <h6 className="card-subtitle mb-2 text-light">{sourceName? sourceName : "No source" } | {author ? author : "No author"}</h6>
          <h5 className="card-title">
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-light">
             {title.slice(0, 40)}{title.length > 50 ? "..." : ""}
           </a>
         </h5>
          <p className="card-text">{description ? description.slice(0, 90) : "Something happened, but no description :( !"}</p>
          <p className="card-text text-light">{new Date(date).toLocaleDateString()}</p>
       </div>
     </div>
  );
}

export default NewsItem;
