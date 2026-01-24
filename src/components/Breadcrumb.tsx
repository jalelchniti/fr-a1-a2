import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import '../styles/navigation-enhancements.css';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumbList">
        {items.map((item, index) => (
          <li key={index} className="breadcrumbItem">
            {item.href ? (
              <>
                <Link to={item.href} className="breadcrumbLink">
                  {item.label}
                </Link>
                {index < items.length - 1 && (
                  <span className="breadcrumbSeparator">
                    <ChevronRight size={14} />
                  </span>
                )}
              </>
            ) : (
              <span className="breadcrumbCurrent">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;