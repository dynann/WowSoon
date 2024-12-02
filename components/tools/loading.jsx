import { Loader2 } from "oxy-ui";
import "oxy-ui/dist/style.css";
  
export default function Loading() {
    return (
      <div className="bg-white w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-secondary mb-2">
        good thing takes time
      </h1>
      <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }
