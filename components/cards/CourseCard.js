import { Card, Badge } from "antd";
import Link from "next/link";
import { currencyFormatter } from "../../utils/helpers";
import { UserOutlined} from '@ant-design/icons';

const { Meta } = Card;

const CourseCard = ({ course }) => {
  const { name, instructor, price, slug, paid, category } = course;
  return (
    <div className="course">
    <Link href={`/course/${slug}`}>
      <a>
        <div>
          <img 
           src="/images/learn.png"
           style={{ height: "219px", objectFit: "cover" }}

          />
        </div>
        <div className="course_content">
          <h2>{name}</h2>
          <p> <UserOutlined/> {" "} {instructor.name}</p>
          <div
            count={category}
            style={{ backgroundColor: "#03a9f4" }}
          />
          <h4 className="free" style={{ color:'blue', fontWeight:"bold"}}>
            {paid
              ? currencyFormatter({
                  amount: price,
                  currency: "usd",
                })
              : "Free"}
          </h4>
        </div>
      </a>
      
    </Link>
    </div>
  );
};

export default CourseCard;
