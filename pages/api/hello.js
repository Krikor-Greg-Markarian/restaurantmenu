// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const data = {
    about: [
      {
        image_url:
          "https://cdn.pixabay.com/photo/2021/12/07/14/00/river-6853339__480.jpg",
        title: "Title:RestaurantMenu",
        description:
          "Description:Love is friendship that has caught fire. It is quiet understanding.",
        price: "Price:32.4",
      },
    ],
  };

  res.status(200).json(data);
}
