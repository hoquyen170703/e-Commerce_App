import { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/app/models/Product"; // Import class Product
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([]); // State chứa danh sách sản phẩm
    const [loading, setLoading] = useState(true);

    
    // Hàm tải tệp JSON và cập nhật trạng thái
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/data/products.json");
                const data = await response.json();

                // Chuyển đổi dữ liệu JSON thành các đối tượng Product
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const productsList = data.data.map((productData: any) => {
                    return new Product(
                        productData.id,
                        productData.code,
                        productData.name,
                        productData.description,
                        productData.image,
                        productData.price,
                        productData.date,
                        productData.category,
                        productData.quantity,
                        productData.inventoryStatus,
                        productData.rating
                    );
                });

                setProducts(productsList); // Lưu danh sách sản phẩm vào state
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Nếu dữ liệu đang tải
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
            {products.map((product) => (
                <Link href={"/" + product.code}
                    key={product.id}
                    className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[20%]"
                >
                    <div className="relative w-full h-80">
                        <Image
                            src={`/images/product/${product.image}`} // Lấy hình ảnh từ thư mục public/images
                            alt={product.name}
                            fill
                            sizes="25vw"
                            className="absolute object-cover rounded-md"
                        />
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">{product.name}</span>
                        <span className="font-semibold">${ product.price }</span>
                    </div>
                    <div className="text-sm text-gray-500">{product.description}</div>
                    {product.quantity > 0 ? (
                        <Button className="rounded-2xl ring-1 ring-blue-400 bg-white text-black py-2 px-4 text-xs hover:bg-blue-500 hover:text-white w-max">Thêm vào giỏ hàng</Button>
                    ) : (
                            <Button className="rounded-2xl w-max" variant="destructive" disabled onClick={(e: React.MouseEvent) => e.preventDefault}> Hết hàng</Button>
                    )}
                    
                </Link>
            ))}
        </div>
    );
}
