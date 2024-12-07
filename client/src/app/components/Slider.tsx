import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function Slider() {
    const slides = [
        {
            id: 1,
            title: "Summer Sale Collections",
            description: "Sale! Up to 50% off!",
            img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
            url: "/",
            bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
        },
        {
            id: 2,
            title: "Winter Sale Collections",
            description: "Sale! Up to 50% off!",
            img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
            url: "/",
            bg: "bg-gradient-to-r from-pink-50 to-blue-50",
        },
        {
            id: 3,
            title: "Spring Sale Collections",
            description: "Sale! Up to 50% off!",
            img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
            url: "/",
            bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
        },
    ];

    return (
        <div className="flex justify-center items-center pt-10">
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent>
                    {slides.map((slide) => (
                        <CarouselItem key={slide.id}>
                            <div
                                className={`flex flex-col md:flex-row items-center h-auto md:h-[400px] w-full ${slide.bg}`}
                            >
                                {/* Cột bên trái: Hình ảnh */}
                                <div className="w-full md:w-1/2 h-[250px] md:h-full relative">
                                    <Image
                                        src={slide.img}
                                        alt={slide.title}
                                        fill
                                        className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                                    />
                                </div>

                                {/* Cột bên phải: Nội dung */}
                                <div className="w-full md:w-1/2 h-auto flex flex-col justify-center items-start gap-4 p-6 md:p-8 text-center md:text-left">
                                    <h2 className="text-xl md:text-3xl font-bold">{slide.title}</h2>
                                    <p className="text-sm md:text-lg text-gray-600">
                                        {slide.description}
                                    </p>
                                    <a
                                        href={slide.url}
                                        className="inline-block px-4 md:px-6 py-2 md:py-3 bg-lama text-white rounded-lg hover:bg-gray-100 hover:text-lama"
                                    >
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
