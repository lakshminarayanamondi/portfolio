import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
  index: number;
}

const ProjectCard = ({ title, description, technologies, image, link, index }: ProjectCardProps) => {
  return (
    <Card 
      className="glass-card hover-lift group cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader>
        <div className="relative overflow-hidden rounded-lg mb-4 bg-gradient-to-br from-primary/20 to-accent/20 h-48 flex items-center justify-center">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-300">
              💻
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardTitle className="gradient-text text-xl group-hover:scale-105 transition-transform duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <div className="mt-4">
            <a
              href={link}
              className="inline-flex items-center text-sm text-accent hover:text-accent/80 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;