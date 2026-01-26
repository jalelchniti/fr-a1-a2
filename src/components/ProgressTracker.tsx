import React from 'react';
import { Check, Lock, Circle } from 'lucide-react';
import '../styles/navigation-enhancements.css';

interface ProgressStep {
  id: string;
  title: string;
  completed: boolean;
  locked: boolean;
  path?: string;
}

interface ProgressTrackerProps {
  steps: ProgressStep[];
  currentStepId: string;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ steps, currentStepId }) => {
  return (
    <div className="progress-tracker">
      {steps.map((step, index) => {
        const isCurrent = step.id === currentStepId;
        const isCompleted = step.completed;
        const isLocked = step.locked;
        
        let trackerClass = 'progressTracker';
        if (isLocked) trackerClass += ' locked';
        else if (isCompleted) trackerClass += ' completed';
        else if (isCurrent) trackerClass += ' current';
        else trackerClass += ' unlocked';
        
        let icon;
        if (isCompleted) icon = <Check size={14} />;
        else if (isLocked) icon = <Lock size={14} />;
        else if (isCurrent) icon = index + 1;
        else icon = <Circle size={14} />;
        
        return (
          <div key={step.id} className={trackerClass}>
            <div className="progressTrackerIcon">
              {icon}
            </div>
            <span>{step.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressTracker;