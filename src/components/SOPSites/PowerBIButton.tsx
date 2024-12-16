import { ExternalLink } from 'lucide-react';
import type { PowerBIReport } from '../../types';
import { ButtonBase } from '../UI/ButtonBase';

interface PowerBIButtonProps {
  report: PowerBIReport;
}

export const PowerBIButton = ({ report }: PowerBIButtonProps) => {
  const handleClick = () => {
    window.open(report.url, '_blank');
  };

  return (
    <ButtonBase
      onClick={handleClick}
      variant="glass"
      className="w-full justify-between group"
    >
      <span>{report.name}</span>
      <ExternalLink 
        size={20} 
        className="text-blue-400 group-hover:text-blue-300 transition-colors" 
      />
    </ButtonBase>
  );
};