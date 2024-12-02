import HomePage from "@/components/pages/main-pages/home";
import { createClient } from "contentful";

 

export default async function home(){
  let foods;
  
    const contentClient = createClient({
      space: process.env.CONTENTFUL_SPACE_ID ,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
      host: "cdn.contentful.com",
    });

    const res = await contentClient.getEntries({ content_type: "food" });
    
    if (!res.items) {
      console.error("No food content found.");
      foods = []
    }

    foods = res.items
    console.log(foods)
    return(
      <div>
        <HomePage foods={foods}/>
    </div>
  )
}