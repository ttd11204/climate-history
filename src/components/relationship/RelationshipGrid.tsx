import { RelationshipItem } from '@/components/relationship/RelationshipItem';

interface Relationship {
  id: number;
  icon: string;
  title: string;
  description?: string;
}

interface RelationshipGridProps {
  relationships: Relationship[];
}

const RelationshipGridPropsGrid: React.FC<RelationshipGridProps> = ({
  relationships,
}) => {
  return (
    <div className='grid grid-cols-3 gap-8 mb-10'>
      {relationships.map((service, index) => (
        <RelationshipItem
          key={service.id}
          icon={service.icon}
          title={service.title}
          description={service.description}
          index={index}
        />
      ))}
    </div>
  );
};

export default RelationshipGridPropsGrid;
