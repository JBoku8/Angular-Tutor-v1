import { UserRole } from './user-roles.interface';
export interface User {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  role: UserRole;
}
