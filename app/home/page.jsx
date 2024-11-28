import HomePage from "@/components/pages/home";
import { createClient } from "contentful";

 

export default async function home(){
  let food;
  
    const contentClient = createClient({
      space: "8po3ii6odiso" ,
      accessToken: "xp-ZXaruXU__tBgS1rQZW4AoxKXuQIU603QuoZpuovs",
    });

    const res = await contentClient.getEntries({ content_type: "food" });
    
    if (!res.items) {
      console.error("No food content found.");
      food = []
    }

    food = res.items
    return<HomePage food={food}/>;
}