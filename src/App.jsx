import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";

function App() {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1707857046403-b8e02b7fe163?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&q=80&w=627",
      color: "blue",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam dicta dolorum veniam. Sunt quibusdam repellat repudiandae aspernatur officiis quisquam blanditiis!",
      tag: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      color: "green",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam dicta dolorum veniam. Sunt quibusdam repellat repudiandae aspernatur officiis quisquam blanditiis!",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
      color: "orange",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam dicta dolorum veniam. Sunt quibusdam repellat repudiandae aspernatur officiis quisquam blanditiis!",
      tag: "Underbanked",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
}

export default App;
