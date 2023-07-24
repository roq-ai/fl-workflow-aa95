import { ProjectInterface } from 'interfaces/project';
import { CreatorInterface } from 'interfaces/creator';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  name: string;
  briefing: string;
  project_id?: string;
  creator_id?: string;
  created_at?: any;
  updated_at?: any;

  project?: ProjectInterface;
  creator?: CreatorInterface;
  _count?: {};
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  briefing?: string;
  project_id?: string;
  creator_id?: string;
}
