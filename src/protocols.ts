export type GetPost = {
  id: number;
  created_datetime: string;
  title: string;
  content: string;
  username: string;
};
export type PatchPostWithId = Omit<GetPost, "created_datetime" | "username">;
export type PostPost = Omit<GetPost, "id" | "created_datetime">;
export type PatchPost = Omit<PostPost, "username">;

export type GetRequestType = {
  count: number;
  next: string;
  previous: string | null;
  results: GetPost[];
};
