import { useEffect } from "react";
import ContentInput from "../components/ContentInput";
import PostBlock from "../components/PostBlock";
import { CenteredDiv, EntirePage } from "../styles/networkPageStyle";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchPosts } from "../redux/getPosts/get-posts-slice";

export default function Network() {
  const dispatch = useAppDispatch();
  const allPosts = useAppSelector((state) => state.allPosts.posts);
  const reRenderTrigger = useAppSelector(
    (state) => state.reRender.reRenderTrigger
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch, reRenderTrigger]);

  return (
    <EntirePage>
      <CenteredDiv>
        <div className="header">
          <h1>CodeLeap Network</h1>
        </div>
        <ContentInput />
        {allPosts.map((i) => (
          <PostBlock
            id={i.id}
            key={i.id}
            username={i.username}
            content={i.content}
            created_datetime={i.created_datetime}
            title={i.title}
          />
        ))}
      </CenteredDiv>
    </EntirePage>
  );
}
