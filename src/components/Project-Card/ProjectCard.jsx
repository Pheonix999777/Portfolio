import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex justify-between items-center">
              <Link target="_blank" href={project.link}>
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                >
                  View Project
                </Button>
              </Link>
              <Link href={project.github}>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  <ExternalLink size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="border-teal-500 text-teal-700 dark:text-teal-300"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
