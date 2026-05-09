import { Project } from '@/types/project';

export type ProjectFormMode = 'create' | 'edit';

export type ProjectFormProps = {
  mode?: ProjectFormMode;
  project?: Project;
};
