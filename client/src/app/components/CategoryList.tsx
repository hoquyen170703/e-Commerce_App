import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Category } from "@/app/models/Category";

interface ApiResponse {
    data: {
        id: string;
        category: string;
        image: string;
    }[];
}

export default function CategoryList() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("/data/products.json");
                const data:ApiResponse = await response.json();

                // Lấy danh sách categories duy nhất
                const uniqueCategories = [
                    ...new Map(
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        data.data?.map((categoryData: any) => [
                            categoryData.category,
                            new Category(categoryData.id, categoryData.category, categoryData.image)
                        ])
                    ).values(),
                ];

                setCategories(uniqueCategories);

            } catch (error) {
                console.error("Error fetching categories:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return <div>
            <div className="flex flex-col space-y-4 justify-center">
                <Skeleton className="h-[125px] w-full rounded-xl items-center" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        </div>;
    }

    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            {categories.map((category) => (
                <Link href="/"
                    key={category.id}
                    className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[20%]"
                >
                    <div className="relative w-full h-80">
                        <Image
                            src={`/images/product/${category.image}`} // Lấy hình ảnh từ thư mục public/images
                            alt={category.category}
                            fill
                            sizes="25vw"
                            className="absolute object-cover rounded-md"
                        />
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">{category.category}</span>
                    </div>

                    <Button className="rounded-2xl ring-1 ring-blue-400 bg-white text-black py-2 px-4 text-xs hover:bg-blue-500 hover:text-white w-max">Xem ngay</Button>

                </Link>
            ))


            }

        </div>
    );
}
