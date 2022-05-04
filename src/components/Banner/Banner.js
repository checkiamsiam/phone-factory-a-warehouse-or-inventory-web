import React  from "react";
import Slider from "react-slick";




const Banner = () => {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
  
    <Slider {...settings}>
      <div>
        <img className="w-full " src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/275724880_1883099625411678_3076445423886982342_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeEEZF41Q13MY4fYCd5OVkd5hsFpRS4C7hiGwWlFLgLuGClNPWso6EYnb1UApOn3AqtbK3VZlV79t8-e4Moxxr_R&_nc_ohc=cwRSSpe_WkUAX9jOZ9m&_nc_oc=AQlLRaoHUESuN1IuASmMi23kATNouEP8nNc2lOOOwBVB_4JSrUoZoHsdV0pVxWmivM0&tn=NCnzM1Yvct_0whrF&_nc_ht=scontent.fdac135-1.fna&oh=00_AT8R-XlvT-eW7rXRzgq1UORj9n92CCwj-_awSIKqmaeekw&oe=62770736" />
      </div>
      <div>
        <img src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/275724880_1883099625411678_3076445423886982342_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeEEZF41Q13MY4fYCd5OVkd5hsFpRS4C7hiGwWlFLgLuGClNPWso6EYnb1UApOn3AqtbK3VZlV79t8-e4Moxxr_R&_nc_ohc=cwRSSpe_WkUAX9jOZ9m&_nc_oc=AQlLRaoHUESuN1IuASmMi23kATNouEP8nNc2lOOOwBVB_4JSrUoZoHsdV0pVxWmivM0&tn=NCnzM1Yvct_0whrF&_nc_ht=scontent.fdac135-1.fna&oh=00_AT8R-XlvT-eW7rXRzgq1UORj9n92CCwj-_awSIKqmaeekw&oe=62770736" />
      </div>
      <div>
        <img src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/275724880_1883099625411678_3076445423886982342_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeEEZF41Q13MY4fYCd5OVkd5hsFpRS4C7hiGwWlFLgLuGClNPWso6EYnb1UApOn3AqtbK3VZlV79t8-e4Moxxr_R&_nc_ohc=cwRSSpe_WkUAX9jOZ9m&_nc_oc=AQlLRaoHUESuN1IuASmMi23kATNouEP8nNc2lOOOwBVB_4JSrUoZoHsdV0pVxWmivM0&tn=NCnzM1Yvct_0whrF&_nc_ht=scontent.fdac135-1.fna&oh=00_AT8R-XlvT-eW7rXRzgq1UORj9n92CCwj-_awSIKqmaeekw&oe=62770736"/>
      </div>
    </Slider>
  );
};

export default Banner;
