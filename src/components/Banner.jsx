import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../src/styles/slider.css";

const Banner = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <section>
      <Swiper
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <div className="w-full h-full bg-gradient-to-b from-[#ffffff70] to-transparent dark:bg-gradient-to-b dark:from-[#00000070] dark:to-transparent absolute flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-6xl text-gray-900 dark:text-white font-extrabold">
              Welcome to Tutor Book
            </h2>
          </div>
          <img
            className="w-full min-h-96 h-full object-cover aspect-[2/1]"
            src="https://i.ibb.co.com/QpCNbZ6/woman-showing-colored-picture-23-2147797985.jpg"
            alt="tutor book slider image 1"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="w-full h-full bg-gradient-to-b from-[#ffffff70] to-transparent dark:bg-gradient-to-b dark:from-[#00000070] dark:to-transparent absolute flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-6xl text-gray-900 dark:text-white font-extrabold">
              Welcome to Tutor Book
            </h2>
          </div>
          <img
            className="w-full min-h-96 h-full object-cover aspect-[2/1]"
            src="https://i.ibb.co.com/9bqrMPJ/team-working-office-with-kanban-board-illustration-business-colleagues-work-tables-33099-570.jpg"
            alt="tutor book slider image 2"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="w-full h-full bg-gradient-to-b from-[#ffffff70] to-transparent dark:bg-gradient-to-b dark:from-[#00000070] dark:to-transparent absolute flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-6xl text-gray-900 dark:text-white font-extrabold">
              Welcome to Tutor Book
            </h2>
          </div>
          <img
            className="w-full min-h-96 h-full object-cover aspect-[2/1]"
            src="https://i.ibb.co.com/YTyqX7p/kids-reading-some-books-with-copy-space-23-2148668631.jpg"
            alt="tutor book slider image 3"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
