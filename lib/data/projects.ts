import { projects } from '@/data/mock-projects';
import { Project, ProjectStatus } from '@/types/project';

export async function getProjects() {
  return projects;
}

export async function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}

export async function createProject(data: {
  name: string;
  client: string;
  status: ProjectStatus;
  description?: string;
}) {
  await new Promise((res) => setTimeout(res, 500));

  const newProject: Project = {
    id: crypto.randomUUID(),
    name: data.name,
    client: data.client,
    status: data.status,
    description: data.description,
    tasks: [],
  };

  projects.unshift(newProject);

  return newProject;
}

export async function updateProject(
  id: string,
  data: {
    name: string;
    client: string;
    status: ProjectStatus;
    description?: string;
  },
) {
  await new Promise((res) => setTimeout(res, 500));

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return null;
  }

  project.name = data.name;
  project.client = data.client;
  project.status = data.status;
  project.description = data.description;

  return project;
}

export async function deleteProject(id: string) {
  await new Promise((res) => setTimeout(res, 500));

  const index = projects.findIndex((p) => p.id === id);

  if (index === -1) {
    return null;
  }

  const [deletedProject] = projects.splice(index, 1);

  return deletedProject;
}

export async function addTask(projectId: string, title: string) {
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return null;
  }

  const newTask = {
    id: crypto.randomUUID(),
    title,
    done: false,
  };

  project.tasks.push(newTask);

  return newTask;
}

export async function toggleTask(projectId: string, taskId: string) {
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return null;
  }

  const task = project.tasks.find((t) => t.id === taskId);

  if (!task) {
    return null;
  }

  task.done = !task.done;

  return task;
}

export async function deleteTask(projectId: string, taskId: string) {
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return null;
  }

  project.tasks = project.tasks.filter((t) => t.id !== taskId);

  return true;
}
