import HomePage from "@/components/pages/home";
import { createClient } from "contentful";

 

export default async function home(){
  let food;
  
    const contentClient = createClient({
      space: process.env.CONTENTFUL_SPACE_ID ,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });

    const res = await contentClient.getEntries({ content_type: "food" });
    
    if (!res.items) {
      console.error("No food content found.");
      food = []
    }

    food = res.items
    return(
      <div>
           {food.map(Food => (
            <HomePage key={Food.sys.key} food={Food}/>
           ))} 
    </div>
  )
}