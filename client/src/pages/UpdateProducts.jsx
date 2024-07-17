import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import Axios from "../Axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import TriangleLoader from "../components/TriangleLoader";

const UpdateProducts = () => {
  const { slug } = useParams();
  const [data, setData] = useState({
    name: "",
    desc: "",
    sku: "",
    price: "",
    color: "",
    brand: "",
    material: "",
    category: "",
    featured: "false",
  });
  const [linkData, setLinkData] = useState({
    link1: null,
    link2: null,
    link3: null,
    link4: null,
  });
  const [fields, setFields] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await Axios.get(`/product/${slug}`);
        const product = response.data.data;

        const newFields = Array(12).fill(null);
        product.sizeQuantity.forEach((field) => {
          newFields[field.size - 3] = {
            size: field.size,
            quantity: field.quantity,
          };
        });

        setData({
          name: product.name,
          desc: product.description,
          sku: product.sku,
          price: product.price,
          color: product.color,
          brand: product.brand,
          material: product.material,
          category: product.category,
          featured: product.isFeatured ? "true" : "false",
        });

        setLinkData({
          link1: product.image.link1,
          link2: product.image.link2,
          link3: product.image.link3,
          link4: product.image.link4,
        });

        setFields(newFields);
        setLoading(false);
      } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong", {
          position: "bottom-right",
        });
        navigate("/admin/products");
      }
    };
    fetchProduct();
  }, [slug, navigate]);

  const changeFields = (e) => {
    setFields(e);
  };

  const changeLink = (link, index) => {
    setLinkData((prev) => ({
      ...prev,
      [`link${index}`]: link,
    }));
  };

  const changeCategory = (e) => {
    setData({ ...data, category: e });
  };

  const handleInputChange = (event) => {
    setData({ ...data, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("jwtAdmin");
      if (!token) {
        return toast.error("Access denied.");
      }
      const validFields = fields.filter((field) => field && field.quantity > 0);

      if (
        validFields.length === 0 ||
        !data.name ||
        !data.desc ||
        !data.sku ||
        !data.price ||
        !data.color ||
        !data.brand ||
        !data.material ||
        !linkData.link1 ||
        !linkData.link2 ||
        !linkData.link3 ||
        !linkData.link4
      ) {
        return toast.error("Please fill all the fields.");
      }

      const response = await Axios.put(
        `/product/update/${slug}`,
        { ...data, sizeQuantity: validFields, image: linkData },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/admin/products");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  if (loading) return <TriangleLoader height="500px" />;

  return (
    <div className="orderMainContainer">
      <h1 className="cHeader" style={{ textAlign: "left", marginBottom: "1rem" }}>
        Update Product
      </h1>
      <div className="dashOverview">
        <ProductForm
          linkData={linkData}
          changeLink={changeLink}
          data={data}
          handleInputChange={handleInputChange}
          fields={fields}
          changeFields={changeFields}
          name="Update Product"
          changeCategory={changeCategory}
          handleSubmit={handleSubmit}
          handleCancel={() => navigate("/admin/products")}
        />
      </div>
    </div>
  );
};

export default UpdateProducts;
