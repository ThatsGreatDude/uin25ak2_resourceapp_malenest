import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Hjem</Link></li>
            <li><Link to="/html">HTML</Link></li>
            <li><Link to="/css">CSS</Link></li>
            <li><Link to="/javascript">JavaScript</Link></li>
            <li><Link to="/react">React</Link></li>
            <li><Link to="/sanity">Sanity & Headless CMS</Link></li>
          </ul>
        </nav>
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