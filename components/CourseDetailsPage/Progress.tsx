import { FC } from "react";

interface ProgressProps {
  courseNameGeo: string;
  progress: number;
}

const Progress: FC<ProgressProps> = ({ courseNameGeo, progress }) => {
  return (
    <div className='course-details-progress'>
      <h1>{courseNameGeo}</h1>
      <div>
        <p>თქვენი პროგრესი: {Math.round(progress)}%</p>
        <div className="progress">
          <div
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Progress