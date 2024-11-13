import * as React from "react";

import { Progress } from "@/components/ui/progress";

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    // const timer = setTimeout(() => setProgress(66), 500);
    // return () => clearTimeout(timer);

    const interval = setInterval(() => {
      // You can adjust how you want the progress value to change here
      setProgress((prevProgress) => (prevProgress === 100 ? 13 : 66));
    }, 10000); // Every 10 seconds (10000 ms)

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return <Progress value={progress} className="w-[60%]" />;
}
