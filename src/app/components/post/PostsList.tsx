import { PostCard } from '.';
import { IPost } from '@/app/types/IPost';

interface Props {
  posts: IPost[];
}

export const PostsList = ({ posts }: Props) => {
  return (
    <>
      {posts?.map((p) => (
        <PostCard
          key={p.id}
          userName={p.users.user_name}
          userFullName={p.users.name}
          avatarUrl={p.users.avatar_url}
          content={p.content}
        />
      ))}
    </>
  );
};
