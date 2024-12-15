import { LinearProgress } from "@mui/material";
import { PROGRESS_BAR, SLIDER_TIMES } from "./config";

const ProgressBar = ({ progressKey }) => (
  <LinearProgress
    key={progressKey}
    variant="determinate"
    value={100}
    sx={{
      height: PROGRESS_BAR.height,
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 4,
      backgroundColor: PROGRESS_BAR.background,
      "& .MuiLinearProgress-bar": {
        backgroundColor: PROGRESS_BAR.color,
        width: "100%",
        animation: `${SLIDER_TIMES.progressBarAnimationDuration}ms linear 0s infinite slide`,
      },
      "@keyframes slide": {
        from: { width: 0 },
        to: { width: "100%" },
      },
    }}
  />
);

export default ProgressBar;
