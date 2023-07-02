import React, { useEffect, useRef } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const ReviewProgressBar = ({ data }) => {
  const { starType = 5, percentage = 70 } = data;
  
  
  const progressRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    let i = 0;
    timeRef.current = setInterval(() => {
      if (i < percentage) {
        if (i < (0.6 * percentage)){          
        i += 2;
        }
        else{
          i += 0.8
        }
        progressRef.current.value = i;
      }
      
    }, 10);

    return () => clearInterval(timeRef.current);
  }, []);

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography
        variant="body2"
        sx={{
          width: "50px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {`${starType} star${starType > 1 ? "s" : ""}`}
      </Typography>

      <progress
        ref={progressRef}
        max="100"
        min="0"
        value={progressRef.current ? progressRef.current.value : 0}
      />

      <Typography
        sx={{
          width: "50px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          textAlign: "right",
        }}
      >
        {`${percentage} %`}
      </Typography>
    </Stack>
  );
};

export default ReviewProgressBar;