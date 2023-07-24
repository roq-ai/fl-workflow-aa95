const mapping: Record<string, string> = {
  companies: 'company',
  creators: 'creator',
  projects: 'project',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
