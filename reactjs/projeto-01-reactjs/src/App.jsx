import { Post } from "./Post";
import { Header } from "./assets/components/Header";
import './styles.css';
import './global.css';

export function App() {
  return(
    <div>
      <Header />

      <Post 
      author ="Issufi Badji" 
      content ="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda impedit repellendus ipsa porro, provident dolor accusamus, architecto unde sit nobis odio distinctio iure eos iusto modi earum facilis necessitatibus harum."
    />

    <Post 
    author ="Yousher Bj" 
    content ="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda impedit repellendus ipsa porro, provident dolor accusamus, architecto unde sit nobis odio distinctio iure eos iusto modi earum facilis necessitatibus harum."

  />
    </div>
    

  )
  
}
