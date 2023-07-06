import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import { useProduct } from "../context/productContext/context";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { api } from "../constants/api";
import { useUser } from "../context/userContext/context";
const ProductForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    userState: { user },
  } = useUser();
  const {
    productState: { products },
    productDispatch,
  } = useProduct();
  const [selectedProduct, setSelectedProduct] = useState({});

  const getData = async (id) => {
    try {
      const { data } = await axios.get(`${api}products/find/${id}`);
      console.log(data, "this is prod");
      if (data) {
        setSelectedProduct(data);
      }
    } catch (error) {
      console.log("there is an error");
    }
  };
  useEffect(() => {
    getData(id);
  }, [id, products]);
  const sizes = [
    { name: "XXS", inStock: true, id: "xxs" },
    { name: "XS", inStock: true, id: "xs" },
    { name: "S", inStock: true, id: "s" },
    { name: "M", inStock: true, id: "m" },
    { name: "L", inStock: true, id: "l" },
    { name: "XL", inStock: true, id: "xl" },
    { name: "2XL", inStock: true, id: "2xl" },
    { name: "3XL", inStock: true, id: "3xl" },
  ];

  console.log(selectedProduct, "selected products");

  useEffect(() => {
    if (selectedProduct && id) {
      setValue("title", selectedProduct.title);
      setValue("description", selectedProduct.description);
      setValue("price", selectedProduct.price);
      setValue("thumbnail", selectedProduct.mainImageUrl);
      setValue("stock", selectedProduct.InStock);
      setValue(
        "image1",
        selectedProduct.extraImages && selectedProduct.extraImages[0]
      );
      setValue(
        "image2",
        selectedProduct.extraImages && selectedProduct.extraImages[1]
      );
      setValue(
        "image3",
        selectedProduct.extraImages && selectedProduct.extraImages[2]
      );
      setValue("color", selectedProduct.color);
      setValue("material", selectedProduct.material);

      setValue(
        "sizes",
        selectedProduct.sizes && selectedProduct.sizes.map((size) => size.id)
      );
    }
  }, [selectedProduct, id, setValue]);

  return (
    <>
      <Navbar>
        <form
          noValidate
          onSubmit={handleSubmit(async (data) => {
            const product = { ...data };
            product.extraImages = [
              product.image1,
              product.image2,
              product.image3,
            ];
            delete product["image1"];
            delete product["image2"];
            delete product["image3"];
            console.log(product, "this is product");
            if (id) {
              const config = {
                headers: {
                  Authorization: `Bearer ${user.token}`,
                },
              };
              const res = await axios.put(`${api}products/${id}`,product, config);
              console.log(res.data, "updated data");
              productDispatch({ type: "UPDATE_PRODUCT", payload: res.data });
              navigate("/admin");
            } else {
              const config = {
                headers: {
                  Authorization: `Bearer ${user.token}`,
                },
              };
              const res = await axios.post(`${api}products/`, product, config);
              console.log(res.data, "add products");
              productDispatch({ type: "ADD_PRODUCT", payload: res.data });
              navigate("/admin");
            }
          })}
        >
          <div className="space-y-12 bg-white p-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                {selectedProduct ? "edit product" : "Add Product"}
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Product Title
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                      <input
                        type="text"
                        {...register("title", {
                          required: "name is required",
                        })}
                        id="title"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      {...register("description", {
                        required: "description is required",
                      })}
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Write a few sentences about product.
                  </p>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="sizes"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Sizes
                  </label>
                  <div className="mt-2">
                    {sizes.map((size) => (
                      <>
                        <input
                          type="checkbox"
                          {...register("sizes", {})}
                          key={size.id}
                          value={size.id}
                        />{" "}
                        {size.name}
                      </>
                    ))}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Price
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                      <input
                        type="number"
                        {...register("price", {
                          required: "price is required",
                          min: 1,
                          max: 10000,
                        })}
                        id="price"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="discountPercentage"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    color
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                      <input
                        type="string"
                        {...register("color", {
                          required: "color is required",
                        })}
                        id="color"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="stock"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Stock
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                      <input
                        type="number"
                        {...register("InStock", {
                          required: "stock is required",
                          min: 0,
                        })}
                        id="stock"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="stock"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    material
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                      <input
                        type="string"
                        {...register("material", {
                          required: "material is required",
                        })}
                        id="material"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="thumbnail"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Main image
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                      <input
                        type="text"
                        {...register("mainImageUrl", {
                          required: "thumbnail is required",
                        })}
                        id="thumbnail"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="extraImage"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    extra Image 1
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                      <input
                        type="text"
                        {...register("image1", {
                          required: "image1 is required",
                        })}
                        id="image1"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="extraImage"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    extra Image 2
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                      <input
                        type="text"
                        {...register("image2", {
                          required: "image is required",
                        })}
                        id="image2"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="image2"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    extra Image 3
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                      <input
                        type="text"
                        {...register("image3", {
                          required: "image is required",
                        })}
                        id="image3"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </Navbar>
    </>
  );
};

export default ProductForm;
