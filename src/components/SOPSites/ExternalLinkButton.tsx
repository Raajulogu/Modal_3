import { Link } from 'lucide-react';
import type { ExternalLink } from '../../types';
import { ButtonBase } from '../UI/ButtonBase';

interface ExternalLinkButtonProps {
  link: ExternalLink;
}

export const ExternalLinkButton = ({ link }: ExternalLinkButtonProps) => {
  const handleClick = () => {
    window.open(link.url, '_blank');
  };

  return (
    <ButtonBase
      onClick={handleClick}
      variant="glass"
      className="w-full justify-between group"
    >
      <span>{link.name}</span>
      <Link 
        size={20} 
        className="text-green-400 group-hover:text-green-300 transition-colors" 
      />
    </ButtonBase>
  );
};