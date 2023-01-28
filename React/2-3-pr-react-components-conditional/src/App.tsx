import "./App.css";
import { Button } from "./components/Button/Button";
import { Hero } from "./components/Hero/Hero";
import { Header } from "./components/Header/Header";
import { Image, ImageArray, Portfolio } from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Header
        title="Title"
        one="Some about text"
        two="in two lines"
        header="header-wrapper"
      >
        <Button />
      </Header>

      <Portfolio
        title="Portfolio"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />

      <div className="container">
        <ImageArray />

        {/* <Image
          image="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2025&q=80"
          description="Ipsum Feugiat"
        />
        <Image
          image="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2025&q=80"
          description="Ipsum Feugiat"
        />
        <Image
          image="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2025&q=80"
          description="Ipsum Feugiat"
        />

        <Image
          image="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          description="Rhoncus Semper"
        />
        <Image
          image="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          description="Rhoncus Semper"
        />
        <Image
          image="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          description="Rhoncus Semper"
        /> */}
      </div>
      <Hero title="" subtitle="Info subtitle" color="blue" />
    </div>
  );
}

export default App;
