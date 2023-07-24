import { TaskInterface } from 'interfaces/task';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  delivery_scope: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  company?: CompanyInterface;
  _count?: {
    task?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  delivery_scope?: string;
  company_id?: string;
}
