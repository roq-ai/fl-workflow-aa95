interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Atendimento'],
  customerRoles: [],
  tenantRoles: ['Atendimento', 'CREATOR', 'Project Manager', 'Administrator'],
  tenantName: 'Company',
  applicationName: 'FL Workflow',
  addOns: ['chat', 'notifications', 'file'],
};
