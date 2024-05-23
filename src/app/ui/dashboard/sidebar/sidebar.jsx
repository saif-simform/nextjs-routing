import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdMessage,
  MdAnalytics,
} from "react-icons/md";
import Menu from "./menu/menu";
import Image from "next/image";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Posts",
        path: "/dashboard/posts",
        icon: <MdMessage />,
      },
    ],
  },
  {
    title: "Parallel Routing",
    list: [
      {
        title: "Analytics",
        path: "/analytics",
        icon: <MdAnalytics />,
      },
    ],
  },
  {
    title: "Catch All-Segment",
    list: [
      {
        title: "Posts",
        path: "/posts",
        icon: <MdMessage />,
      },
    ],
  },
];

const Sidebar = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          alt="profile"
          width="50"
          height="50"
        />
        <div className={styles.userDetails}>
          <span className={styles.userName}>Saif Pathan</span>
          <span className={styles.userTitle}>Admin</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat, index) => (
          <li key={index}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <Menu item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
