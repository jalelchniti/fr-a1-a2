import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Play,
  Volume2,
  MessageCircle,
  Users,
  Clock,
  Star,
  Filter,
  Search,
  Download,
  ExternalLink
} from 'lucide-react';
import '../styles/content-management.css';
import { contentData } from './contentData';
import type { ContentType } from './contentTypes';
import { contentTypes } from './contentTypes';

export interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: ContentType;
  level: 'A1.1' | 'A1.2' | 'A1.3' | 'A1.4' | 'A2.1' | 'A2.2' | 'A2.3' | 'A2.4';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in minutes
  tags: string[];
  multimediaUrl?: string;
  isInteractive: boolean;
  rating: number;
}

interface ContentManagementProps {
  title?: string;
  subtitle?: string;
  additionalContent?: ContentItem[];
}

const ContentManagement: React.FC<ContentManagementProps> = ({
  title = "Contenu d'apprentissage",
  subtitle = "Explorez nos ressources pédagogiques organisées par thème et niveau",
  additionalContent = [],
}) => {
  const content = useMemo<ContentItem[]>(() => [
    ...contentData,
    ...(additionalContent || [])
  ], [additionalContent]);

  const [filters, setFilters] = useState({
    level: 'all',
    type: 'all',
    difficulty: 'all',
    tag: 'all'
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Extract unique tags for filter
  const allTags = Array.from(
    new Set(content.flatMap(item => item.tags))
  );

  const levelOptions = useMemo(() => {
    const levels = Array.from(new Set(content.map(item => item.level)));
    return levels.sort().map(level => ({ value: level, label: level }));
  }, [content]);
  // Apply filters and search using useMemo for derived state
  const filteredContent = useMemo(() => {
    let result = content;

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Apply level filter
    if (filters.level !== 'all') {
      result = result.filter(item => item.level === filters.level);
    }

    // Apply type filter
    if (filters.type !== 'all') {
      result = result.filter(item => item.type === filters.type);
    }

    // Apply difficulty filter
    if (filters.difficulty !== 'all') {
      result = result.filter(item => item.difficulty === filters.difficulty);
    }

    // Apply tag filter
    if (filters.tag !== 'all') {
      result = result.filter(item => item.tags.includes(filters.tag));
    }

    return result;
  }, [filters, searchQuery, content]);

  // Pagination
  const totalPages = Math.ceil(filteredContent.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedContent = filteredContent.slice(startIndex, startIndex + itemsPerPage);

  const handleFilterChange = (filterType: keyof typeof filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1); // Reset to first page when search changes
  };

  const getTypeIcon = (type: ContentItem['type']) => {
    switch (type) {
      case 'lesson': return <BookOpen size={16} />;
      case 'exercise': return <MessageCircle size={16} />;
      case 'video': return <Play size={16} />;
      case 'audio': return <Volume2 size={16} />;
      case 'quiz': return <Users size={16} />;
      case 'grammar': return <BookOpen size={16} />;
      case 'vocabulary': return <MessageCircle size={16} />;
      default: return <BookOpen size={16} />;
    }
  };

  const getDifficultyClass = (difficulty: ContentItem['difficulty']) => {
    switch (difficulty) {
      case 'beginner': return 'difficultyBeginner';
      case 'intermediate': return 'difficultyIntermediate';
      case 'advanced': return 'difficultyAdvanced';
      default: return '';
    }
  };

  const getDifficultyLabel = (difficulty: ContentItem['difficulty']) => {
    switch (difficulty) {
      case 'beginner': return 'Débutant';
      case 'intermediate': return 'Intermédiaire';
      case 'advanced': return 'Avancé';
      default: return difficulty;
    }
  };

  return (
    <div className="contentManagement">
      <div className="contentManagementHeader">
        <h1 className="contentManagementTitle">{title}</h1>
        <p className="contentManagementSubtitle">{subtitle}</p>
      </div>
      
      <div className="contentFilters">
        <div className="filterGroup">
          <label htmlFor="search" className="filterLabel">Recherche</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            <Search size={16} style={{ color: 'var(--color-text-tertiary)' }} />
            <input
              id="search"
              type="text"
              placeholder="Rechercher par mot-clé..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="filterSelect"
              style={{ flex: 1 }}
            />
          </div>
        </div>
        
        <div className="filterGroup">
          <label htmlFor="levelFilter" className="filterLabel">Niveau</label>
          <select
            id="levelFilter"
            value={filters.level}
            onChange={(e) => handleFilterChange('level', e.target.value)}
            className="filterSelect"
          >
            <option value="all">Tous les niveaux</option>
            {levelOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        
        <div className="filterGroup">
          <label htmlFor="typeFilter" className="filterLabel">Type</label>
          <select
            id="typeFilter"
            value={filters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
            className="filterSelect"
          >
            <option value="all">Tous les types</option>
            {contentTypes.map(type => (
              <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
            ))}
          </select>
        </div>
        
        <div className="filterGroup">
          <label htmlFor="difficultyFilter" className="filterLabel">Difficulté</label>
          <select
            id="difficultyFilter"
            value={filters.difficulty}
            onChange={(e) => handleFilterChange('difficulty', e.target.value)}
            className="filterSelect"
          >
            <option value="all">Toutes</option>
            <option value="beginner">Débutant</option>
            <option value="intermediate">Intermédiaire</option>
            <option value="advanced">Avancé</option>
          </select>
        </div>
        
        <div className="filterGroup">
          <label htmlFor="tagFilter" className="filterLabel">Mot-clé</label>
          <select
            id="tagFilter"
            value={filters.tag}
            onChange={(e) => handleFilterChange('tag', e.target.value)}
            className="filterSelect"
          >
            <option value="all">Tous les mots-clés</option>
            {allTags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>
      </div>
      
      {paginatedContent.length > 0 ? (
        <div className="contentGrid">
          {paginatedContent.map(item => (
            <div key={item.id} className="contentCard">
              <div className="contentCardHeader">
                <div className="contentCardTitle">{item.title}</div>
              </div>
              
              <div className="contentCardBody">
                <div className={`contentTag ${getDifficultyClass(item.difficulty)}`}>
                  {getDifficultyLabel(item.difficulty)}
                </div>
                <p className="contentCardDescription">{item.description}</p>
                
                {item.multimediaUrl && (
                  <div className="multimediaPlayer">
                    {item.type === 'audio' ? (
                      <div className="audioPlayer">
                        <Volume2 size={24} />
                        <div>
                          <div>Lecture audio</div>
                          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)' }}>
                            Cliquez pour écouter
                          </div>
                        </div>
                      </div>
                    ) : item.type === 'video' ? (
                      <div className="videoPlayer">
                        <Play size={48} style={{ opacity: 0.7 }} />
                      </div>
                    ) : null}
                  </div>
                )}
                
                {item.isInteractive && (
                  <div className="interactiveContent">
                    <MessageCircle size={24} style={{ margin: '0 auto var(--spacing-md) auto', opacity: 0.7 }} />
                    <p>Contenu interactif</p>
                  </div>
                )}
              </div>
              
              <div className="contentCardFooter">
                <div className="contentCardMeta">
                  <div className="metaItem">
                    {getTypeIcon(item.type)}
                    <span>{item.type}</span>
                  </div>
                  <div className="metaItem">
                    <Clock size={16} />
                    <span>{item.duration} min</span>
                  </div>
                  <div className="metaItem">
                    <Star size={16} />
                    <span>{item.rating}</span>
                  </div>
                </div>
                
                <div className="contentCardActions">
                  <button className="btn btn-secondary">
                    <Download size={16} />
                  </button>
                  <button className="btn btn-primary">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="noResults">
          <div className="noResultsIcon">
            <Filter size={48} />
          </div>
          <h3 className="noResultsTitle">Aucun contenu trouvé</h3>
          <p className="noResultsMessage">
            Ajustez vos filtres ou termes de recherche pour trouver plus de résultats.
          </p>
        </div>
      )}
      
      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              className={`paginationButton ${currentPage === page ? 'active' : ''}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentManagement;