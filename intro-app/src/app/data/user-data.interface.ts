import { UserRole } from './user-roles.interface';
export interface User {
  uid: string;
  email: string;
  displayName: string;
  emailVerified: boolean;
  photoURL: string;
}
