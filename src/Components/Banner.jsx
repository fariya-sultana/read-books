import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className="max-w-11/12 mx-auto rounded-2xl overflow-hidden lg:h-[70vh] ">
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 8000 }}
                modules={[Autoplay]}
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div
                        className="relative h-[300px] md:h-[500px] lg:h-[600px] bg-cover bg-center flex items-center"
                        style={{ backgroundImage: "url(https://i.postimg.cc/d3wf7sd8/banner3.jpg)" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-white/0"></div>
                        <div className="relative z-10 max-w-2xl px-6 md:px-16">
                            <h2 className="mb-3 md:mb-5 md:text-5xl text-3xl font-bold text-white text-left md:leading-14">
                                Explore Stories <br /> with ReadBooks
                            </h2>
                            <p className="mb-3 md:mb-5 text-white opacity-90 text-left">
                                Dive into an endless library of fiction, non-fiction, self-help, and academic books. Find what moves you and expand your horizons—one page at a time.
                            </p>
                            <Link to={'/aboutUs'}>
                                <button className="btn btn-primary text-white">Learn more</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div
                        className="relative h-[300px] md:h-[500px] lg:h-[600px] bg-cover bg-center flex items-center"
                        style={{ backgroundImage: "url(https://i.postimg.cc/8z0xyVQS/banner2.jpg)" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-white/0"></div>
                        <div className="relative z-10 max-w-2xl px-6 md:px-16">
                            <h2 className="mb-3 md:mb-5 md:text-5xl text-3xl font-bold text-white text-left md:leading-14">
                                Borrow Books <br />with a Click
                            </h2>
                            <p className="mb-3 md:mb-5 text-white opacity-90 text-left">
                                With our easy-to-use system, you can borrow your favorite books in seconds. Track your borrowed list and never miss a return date.
                            </p>
                            <Link to={'/aboutUs'}>
                                <button className="btn btn-primary text-white">Learn more</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div
                        className="relative h-[300px] md:h-[500px] lg:h-[600px] bg-cover bg-left flex items-center"
                        style={{ backgroundImage: "url(https://i.postimg.cc/6qC9KpKn/banner1.jpg)" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-white/0"></div>
                        <div className="relative z-10 max-w-2xl px-6 md:px-16">
                            <h2 className="mb-3 md:mb-5 md:text-5xl text-3xl font-bold text-white text-left md:leading-14">
                                Add and Share <br />Books Easily
                            </h2>
                            <p className="mb-3 md:mb-5 text-white opacity-90 text-left">
                                Got a great book? Add it to our collection and share it with fellow readers. Join the growing ReadBooks community and contribute to the joy of reading.
                            </p>
                            <Link to={'/addBook'}>
                                <button className="btn btn-primary text-white">Learn more</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
