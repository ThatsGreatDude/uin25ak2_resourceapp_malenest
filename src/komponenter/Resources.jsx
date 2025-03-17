import resources from "../ressurser"; 

const Resources = ({ category }) => {
  const filteredResources = resources.filter(resource => resource.category === category);

  return (
    <div>
      <h1 className="category-title">Ressurser for {category}</h1> 
      <ul>
        {filteredResources.length > 0 ? (
          filteredResources.map((resource, index) => (
            <li key={index}>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            </li>
          ))
        ) : (
          <p> Ingen resultater for kategorien. </p>
        )}
      </ul>
    </div>
  );
};

export default Resources;
