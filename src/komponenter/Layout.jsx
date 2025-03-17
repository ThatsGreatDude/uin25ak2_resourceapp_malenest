import Nav from "./Nav"; 

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Nav /> 
      </header>

      <main>{children}</main>

      <footer>
        <p>© Ressursarkiv 2025</p>
      </footer>
    </>
  );
}





{/* import { Link } from "react-router-dom"; IGNORER DETTE, BARE MEG SOM TESTET TING. 

export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <
                </nav>
            </header>
        </>
    )
}


{/* function Category({kategori}) {

    return <div className="Category">
        <link rel="kategori" href="#" data-category="HTML" />
        <button className="Category-knapp"></button>
    </div>
}

export default Category 

 return <div ClassName="Category">
<div Classname="HTML">
    <URL src={html.url} alt={html}></URL>
</div>
</div>

export default Category */} 