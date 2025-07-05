"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';

interface Section {
  id: number;
  type: string;
  props: Record<string, unknown>;
}

interface Project {
  id: string;
  name: string;
  description?: string;
  lastModified: string;
  sections: Section[];
  device: string;
  nextSectionId: number;
}

export default function MyProjectsClient() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [deleteProjectId, setDeleteProjectId] = useState<string | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  // Load projects from localStorage
  useEffect(() => {
    const savedProjects = localStorage.getItem('website-builder-projects');
    if (savedProjects) {
      try {
        const projectsData = JSON.parse(savedProjects);
        setProjects(projectsData);
      } catch (error) {
        console.error('Error loading projects:', error);
        setProjects([]);
      }
    }
  }, []);

  // Save projects to localStorage
  const saveProjects = (projectsList: Project[]) => {
    localStorage.setItem('website-builder-projects', JSON.stringify(projectsList));
  };



  // Delete project
  const handleDeleteProject = (projectId: string) => {
    setDeleteProjectId(projectId);
    setShowDeleteDialog(true);
  };

  const confirmDeleteProject = () => {
    if (deleteProjectId) {
      const updatedProjects = projects.filter(p => p.id !== deleteProjectId);
      setProjects(updatedProjects);
      saveProjects(updatedProjects);
      setDeleteProjectId(null);
      setShowDeleteDialog(false);
    }
  };

  const cancelDeleteProject = () => {
    setDeleteProjectId(null);
    setShowDeleteDialog(false);
  };

  // Load project into current design
  const loadProject = (project: Project) => {
    const designData = {
      version: '1.0',
      lastSaved: new Date().toISOString(),
      sections: project.sections,
      device: project.device,
      nextSectionId: project.nextSectionId,
    };
    
    localStorage.setItem('website-builder-design', JSON.stringify(designData));
    window.location.href = '/create-new-website';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="container mx-auto p-6 min-h-dvh">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Projects</h1>
          <p className="text-gray-600 mt-2">Manage and organize your website designs</p>
        </div>
        <div className="flex gap-4">
          
          <Link href="/create-new-website">
            <Button>Create New Project</Button>
          </Link>
        </div>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📁</div>
          <h3 className="text-xl font-semibold mb-2">No projects yet</h3>
          <p className="text-gray-600 mb-6">Start creating your first website design</p>
          <Link href="/create-new-website">
            <Button>Create Your First Project</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <CardDescription>
                      {project.description || 'No description'}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => loadProject(project)}
                    >
                      Open
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDeleteProject(project.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>Last modified: {formatDate(project.lastModified)}</div>
                  <div>Sections: {project.sections.length}</div>
                  <div>Device: {project.device}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Project</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this project? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={cancelDeleteProject}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDeleteProject} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
} 