import { useModal } from "../../../../utils/ModalContext";
import { FiShare2 } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import BlogDetailsStyleWrapper from "./BlogDestails.style";
// components
import Tag from "../tag/Tag";
import Comment from "../comment/Comment";
import CommentBoxment from "../commentBox/CommentBox";
import Sidebar from "../sidebar/Sidebar";

//images
import postThumb from "../../../../assets/images/blog/blog-detail.png";
import postThumb2 from "../../../../assets/images/blog/blog-img2.png";
import postThumb3 from "../../../../assets/images/blog/blog-img3.png";
import avatarIcon from "../../../../assets/images/blog/user.png";
import postThumb4 from "../../../../assets/images/blog/blog.png";
import postThumb5 from "../../../../assets/images/blog/blog2.png";

const BlogDetails = () => {
  const { shareModalHandle } = useModal();
  return (
    <BlogDetailsStyleWrapper>
      <div className="blog_post_details_wrapper">
        <div className="container">
          <div className="row">
            {/* post details col  */}
            <div className="col-lg-8 col-md-12">
              <div className="post_thumbnail">
                <img src={postThumb} alt="bithu nft blog" />
              </div>
              <div className="blog_post_meta">
                <a href="# " className="post_author">
                  <img src={avatarIcon} alt="blog post avatar" />
                  Inna Mouaz
                </a>
                <span>
                  {" "}
                  <FaCalendarAlt /> 18 FEB, 2022
                </span>
              </div>
              <h1 className="post_title">
                It’s the Great Chance to Invest in Metaverse NFT
              </h1>
              <div className="blog_description">
                <p className="text-white">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College.
                </p>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College There are many
                  variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected
                  humour, or randomised words which don't look even slightly
                  believable. If you are going to use a passage of Lorem Ipsum,
                  you need to be sure there isn't anything embarrassing.
                </p>
                <div>
                  <h4>Play-to-Earn</h4>
                  <p>
                    Richard McClintock, a Latin professor at Hampden-Sydney
                    College There are many variations of passages of available,
                    but the majority have suffered alteration in some form.
                  </p>
                  <p>
                    Injected humour, or randomised words which don't look even
                    slightly believable. If you are going to use a passage of
                    Lorem Ipsum, you need to be sure there isn't anything
                    embarrassing.making it over 2000 years old.{" "}
                  </p>
                </div>
                <div className="blockquote">
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized by the
                    charms of pleasure.
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="item-image">
                      <img src={postThumb2} alt="blog item thumb" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="item-image1">
                      <img src={postThumb3} alt="blog item thumb" />
                    </div>
                  </div>
                </div>
                <h4>IGO Facts</h4>
                <p>
                  Let’s take a closer look at the Heroes Chained IGO information
                  and GamFi holders’ opportunity
                  <br /> to buy $GF tokens before market listing through the IGO
                  on the Launchpad on January 17.
                </p>
                <ul>
                  <li>
                    <span>Name: </span>MINTO NFT
                  </li>
                  <li>
                    <span>Token Type:</span> BNB
                  </li>
                  <li>
                    <span>Total supply: </span>100 000 000
                  </li>
                  <li>
                    <span>Initial Mcap: </span>$679K
                  </li>
                  <li>
                    <span>IGO Date: </span>March 30
                  </li>
                  <li>
                    <span>Allocation:</span> $400K (including 5% success fee)
                  </li>
                  <li>
                    <span>IGO Price:</span> $0.35
                  </li>
                  <li>
                    <span>Vesting:</span>20% at TGE, then 13,33% every month for
                    6 months
                  </li>
                </ul>
                <h4>About MintO</h4>
                <p>
                  Randomised words which don't look even slightly believable. If
                  you are going to use a passage
                  <br /> of Lorem Ipsum, you need to be sure there isn't
                  anything embarrassing.
                  <br /> making it over 2000 years old.{" "}
                </p>
              </div>

              {/* // tags  */}
              <div className="post_tags_list">
                <Tag />
                <div className="share_butn">
                  <a href="# " onClick={(e) => shareModalHandle(e)}>
                    <FiShare2 /> Share
                  </a>
                </div>
              </div>

              {/* related posts  */}
              <div className="related_posts_wrapper">
                <a href="# " className="related_post_item">
                  <img src={postThumb4} alt="bithu nft post" />
                  <div className="related_post__title">
                    <span>PREVIOUS</span>
                    How to Create Your 1st Crypto NFTs 🎉
                  </div>
                </a>
                <a href="# " className="related_post_item next">
                  <img src={postThumb5} alt="bithu nft post" />

                  <div className="related_post__title">
                    <span>Next</span>
                    The new token is launching planet
                  </div>
                </a>
              </div>

              {/* comments  */}
              <div className="post_comments_wrapper">
                <h4 className="comment_section_title">3 Comments</h4>
                <Comment />
              </div>

              {/* comment box */}

              <CommentBoxment />
            </div>

            {/* **********sidebar*********** */}
            <div className="col-lg-4 col-md-12">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </BlogDetailsStyleWrapper>
  );
};

export default BlogDetails;
