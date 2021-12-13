import Box from "../src/component/Box";
import cn from "classnames";
import axios from "axios";

export default function Home(props) {
  
  const renderMenuItems = () => {
    // later on we will add the map function here
    return props.posts_data.map((item, idx) => (
      <Box
        title={item.title}
        image_url={item.image_url}
        description={item.description}
        price={item.price}
        button={item.button}
      />
    ));
  };

  return (
    <div className={cn("container mx-auto")}>
      <section>{renderMenuItems()}</section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get("http://localhost:3000/api/hello");

  return {
    props: {
      posts_data: response.data.about,
    }, // will be passed to the page component as props
  };
}
