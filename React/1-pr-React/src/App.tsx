import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Site logo</p>
      </div>
      <header className="App-header">
        <a
          className="App-link"
          href="#"
          // target="_blank" // New tab
          rel="noopener noreferrer"
        >
          Home
        </a>
        <a className="App-link" href="#">
          Product
        </a>
        <a className="App-link" href="#">
          Company
        </a>
        <a className="App-link" href="#">
          Contact
        </a>
      </header>

      <div className="header-image">
        <p>Header image</p>
      </div>

      <main>
        <section className="about-company">
          <div className="flex-columns">
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              perferendis incidunt maiores officiis eos fugit, velit tempora
              laudantium aliquid. Suscipit et minima quis ab maiores nobis.
              Sequi pariatur laborum molestias.
            </p>
          </div>

          <div className="flex-columns">
            <h2>Company</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              perferendis incidunt maiores officiis eos fugit, velit tempora
              laudantium aliquid. Suscipit et minima quis ab maiores nobis.
              Sequi pariatur laborum molestias.
            </p>
          </div>

          <div className="flex-columns">
            <h2>Services</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              perferendis incidunt maiores officiis eos fugit, velit tempora
              laudantium aliquid. Suscipit et minima quis ab maiores nobis.
              Sequi pariatur laborum molestias.
            </p>
          </div>
        </section>

        <section className="main-content">
          <div className="first-column">
            <article className="content">
              <h2>Content</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                voluptate exercitationem ut eaque veritatis facilis modi?
                Numquam maxime rerum, repellat hic voluptatem illo facere
                laudantium adipisci natus aspernatur est! A!
              </p>
            </article>

            <article className="sub-header">
              <h2>Sub Header</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, voluptatem placeat. Autem voluptatibus molestiae
                dicta, quas magni nulla dignissimos fuga cupiditate minima ab
                quod totam numquam facere animi rerum ea! Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Cum doloribus temporibus
                soluta modi dolore ab voluptatibus tempora eaque harum, placeat
                inventore nostrum nisi voluptates repudiandae vitae corporis
                itaque nemo? Doloribus!
              </p>
            </article>
          </div>

          <div className="second-column">
            <aside className="aside-navigation">
              <h3>Navigation</h3>
              <div className="grey-bg">
                <a href="#">Home</a>
                <a href="#">Product</a>
                <a href="#">Company</a>
                <a href="#">Contact</a>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
