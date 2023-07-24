import { TaskInterface } from 'interfaces/task';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CreatorInterface {
  id?: string;
  social_media_credentials: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  user?: UserInterface;
  _count?: {
    task?: number;
  };
}

export interface CreatorGetQueryInterface extends GetQueryInterface {
  id?: string;
  social_media_credentials?: string;
  user_id?: string;
}
