import { type Database } from '@/app/types/database';

type PostEntity = Database['public']['Tables']['posts']['Row'];
type UserType = Database['public']['Tables']['users']['Row'];

export type IPost = PostEntity & {
  users: UserType;
};
