import MyProjects from './MyProjects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Projects - Website Builder',
  description: 'View and manage your website projects',
}

export default function MyProjectsPage() {
    return <MyProjects />;
} 