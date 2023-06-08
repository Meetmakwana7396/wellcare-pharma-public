import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "../components/common/Main";
import ProductCard from "../components/common/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { URL } from "../../baseurl";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addProducts } from "../store/slices/GlobalSlice";

const CustomButton = ({ onClick, children }) => (
  <button
    className="absolute top-1/2 transform -translate-y-1/2 bg-white  rounded-full cursor-pointer"
    onClick={onClick}
  >
    <span className="text-black  flex items-center justify-center w-8 h-8">
      {children}
    </span>
  </button>
);

const Index = () => {
  const dispatch = useDispatch();
  const [productList, setProductsList] = useState([]);
  const [companyArray, setCompanyArray] = useState([]);
  const [search, setSearch] = useState("");

  const getProductsList = () => {
    axios({
      method: "get",
      url: `${URL}medicins/get-medicin-list`,
    })
      .then((response) => {
        setProductsList(response.data.data);
        dispatch(addProducts(response.data.data));
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const swiperRef = React.useRef(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  useEffect(() => {
    getProductsList();
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {}, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  useEffect(() => {
    let companies = [
      ...new Set(
        productList.map(
          (product) => product.medicin.pharma_company.company_name
        )
      ),
    ];
    setCompanyArray(companies);
  }, [productList]);

  return (
    <Main>
      <div className="product-list">
        <Swiper
          ref={swiperRef}
          spaceBetween="20px"
          loop={true}
          navigation={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          style={{ height: "300px" }}
          className="rounded-lg z-0 relative"
        >
          <SwiperSlide>
            <img
              src="image1.jpg"
              className="object-cover h-full w-full"
              alt="Image 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="image2.jpg"
              alt="Image 2"
              className="object-cover h-full w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="image3.jpg"
              alt="Image 3"
              className="object-cover h-full w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="image4.jpg"
              alt="Image 4"
              className="object-cover h-full w-full"
            />
          </SwiperSlide>

          <div className="absolute z-40 top-1/2 transform -translate-y-1/2 left-2">
            <CustomButton onClick={handlePrev}>&lt;</CustomButton>
          </div>
          <div className="absolute z-40 top-1/2 transform -translate-y-1/2 right-10">
            <CustomButton onClick={handleNext}>&gt;</CustomButton>
          </div>
        </Swiper>
        <div className="py-8 my-4">
          <h2 className="text-2xl font-semibold mb-8">All Medicins</h2>

          <div className="">
            <input
              type="text"
              className="form-control mb-5"
              placeholder="Search..."
              name="search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          <div className="grid grid-cols-3 gap-10 ">
            {productList.map((product) => (
              <div key={product.id}>
                <ProductCard data={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
