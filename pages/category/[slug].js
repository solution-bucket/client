import axios from 'axios';
import { Card, Row, Col, Divider, Avatar, Button, Typography } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import dayjs from 'dayjs';
var relativeTime = require('dayjs/plugin/relativeTime');
import useCategory from '../../hooks/useCategory';
import useLatestPosts from '../../hooks/useLatestPosts';
dayjs.extend(relativeTime);
const {Title} = Typography;
import {DollarOutlined ,HistoryOutlined, UserOutlined} from '@ant-design/icons';
import CategoryNotFound from './CategoryNotFound';


const SingleCategory = ({posts, category})=> {
              //hooks
const {categories} = useCategory();
const {latestposts} = useLatestPosts();
  return (
     <>
     <Head>
              <title>{category.name}</title>
              <meta  name="description" content={`Read lLatest posts on ${category.name}`}/>
     </Head>
     <div style={{ marginTop: '50px'}}></div>
     <Row gutter={12}>
              <Col sm={24} lg={17} style={{marginBottom: 12,}}>
                {posts?.length == 0 ? (
                 <CategoryNotFound/>
                ): (
                  <h1 style={{ textAlign:'center'}}>Tutorials in {category.name}</h1>

                )}
                 {/**posts */}
                 {posts.map((post)=> (
                   <Card className='category-content' key={post._id}>
                 
                       <div  style={{display: 'flex'}}>
                         <Avatar shape='square' size={70} 
                         alt={post.title}
                         style={{marginRight:'15px',}} 
                         src={post?.featuredImage?.url || '/images/default.jpg'} />
                       </div>
                       <div>
                            <Link href={`/post/${post?.slug}`}>
                            <a>
                            <Title level={3}>{post?.title}</Title>
                            </a>
                            </Link>
                            <p> <HistoryOutlined style={{ color:'green'}} />{dayjs(post?.createdAt).format("MMMM D, YYYY h:m A")} / <UserOutlined style={{ color:'green'}}/> { " "} {post?.postedBy?.name}</p>
                       </div>
                   </Card>
                 ))}
              </Col>

              <Col xs={24} xl={6}>
        <Divider style={{ marginTop: '30%'}}>Tutorials Categories</Divider>
        {categories.map((c)=> (
          <Link href={`/category/${c.slug}`} key={c._id}>
          <a>
            <Button style={{margin: '2px'}} type="dashed">{c.name}</Button>
          </a>
          </Link>
        ))}
        <Divider>Recent Tutorials</Divider>
        {latestposts.map((p)=> (
          <Link href={`/post/${p.slug}`} key={p._id}>
          <a>
            <Button style={{margin: '2px'}} type="primary">{p.title}</Button>
          </a>
          </Link>
        ))}
           </Col>
     </Row>
     </>
  )
}
export async function getServerSideProps ({ params}) {
const {data} = await axios.get(`${process.env.API}/posts-by-category/${params.slug}`);
 return {
  props: {
   posts:data.posts,
   category:data.category,
  }
 }
}
export default SingleCategory;