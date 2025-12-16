import CustomPost from "./customPost/CustomPost"
import { sectionFeedData } from "./sectionFeedData"

const SectionFeed = () => {

  return (
    <>

      {
        sectionFeedData.map((post, index) => (
          <CustomPost
            key={`${post.authorSrcImg} ${index}`}
            authorSrcImg={post.authorSrcImg}
            authorName={post.authorName}
            authorFollowersNum={post.authorFollowersNum}
            authorJobTitle={post.authorJobTitle}
            caption={post.caption}
            postSrcImg={post.postSrcImg}
            timeAgo={post.timeAgo}
            isSponsored={post.isSponsored}
          />
        ))
      }

    </>
  )

}

export default SectionFeed