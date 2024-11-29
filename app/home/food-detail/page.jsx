import FoodDetailPage from "@/components/pages/foodDetail";
import { createClient } from "contentful";

export default async function FoodDetail(){
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
            <FoodDetailPage key={Food.sys.key} food={Food}/>
           ))} 
    </div>
  )
}