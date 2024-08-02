import React from "react";
import { Avatar, Box, Divider, Rating, Typography } from "@mui/material";
import { StarBorderRounded, StarRateRounded } from "@mui/icons-material";

const Feedback = () => {
  const data = [
  
    {
        id: 1,
        name: "Jenny Wilson",
        imgUrl:
          "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg",
        comment:
        "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
        rating: 4,
      },
      {
        id: 2,
        name: "John Doe",
        imgUrl:
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        comment:
          "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burgerover greens (gluten-free) which was also very good. They very conscientious about gluten allergies.",
        rating: 5,
      },
      {
        id: 3,
        name: "Devon Lane",
        imgUrl:
          "https://media.istockphoto.com/id/1501770003/photo/happy-handsome-young-indian-man-head-shot-front-portrait.webp?b=1&s=170667a&w=0&k=20&c=fRuUWp4CiG8r88tQp5_bmRJV2ultJVj08QlcGBXOyHg=",
        comment:
        "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
        rating: 4,
      },
  ];
  return (
    <Box
      display={"flex"}
      bgcolor={"#1f2029"}
      flexDirection={"column"}
      width={"30%"}
      gap={2}
      p={2}
      borderRadius={"8px"}
    >
      <h3 style={{ fontWeight: "500" }}>Customer's Feedback</h3>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={1}
        overflow={"auto"}
        height={"200px"}
      >
        {data.map((item, index) => (
          <Box key={index} display={"flex"} flexDirection={"column"} gap={1}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={1}
            >
              <Avatar
                src={item.imgUrl}
                sx={{ height: " 35px", width: "35px" }}
              />
              <Typography variant="body2" fontFamily={"poppins"}>
                {item.name}
              </Typography>
            </Box>
            <Rating
              icon={<StarRateRounded />}
              emptyIcon={<StarRateRounded sx={{ color: "#fff" }} />}
              name="half-rating"
              defaultValue={item.rating}
            />
            <Typography
              fontFamily={"poppins"}
              color={"#696a70"}
              sx={{ fontSize: "11px" }}
            >
              {item.comment}
            </Typography>
            <Divider sx={{ bgcolor: "gray" }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Feedback;
