import AddProduct from "./addProduct";
import DeleteProduct from "./deleteProduct";
import UpdateProduct from "./updateProduct";

export const metadata = {
  title: "Product List",
};

type Product = {
  id: number,
  user_id: number,
  isbn: string,
  title: string,
  subtitle: string,
  author: string,
  published: string,
  publisher: string,
  pages: number,
  description: string,
  website: string,
  created_at: string,
  updated_at: string,
};

async function getProducts() {
  const res = await fetch(
    "https://book-crud-service-6dmqxfovfq-et.a.run.app/api/books",
    {
      cache: "no-store",
    }
  );
  return res.json();
}

export default async function ProductList() {
  const products: Product[] = await getProducts();
  return (
    <div className="py-10 px-10">
      <div className="py-2">
        <AddProduct />
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>user id</th>
            <th>isbn</th>
            <th>title</th>
            <th>subtitle</th>
            <th>author</th>
            <th>published</th>
            <th>publisher</th>
            <th>pages</th>
            <th>description</th>
            <th>website</th>
            <th>created at</th>
            <th>updated at</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.user_id}</td>
              <td>{product.isbn}</td>
              <td>{product.title}</td>
              <td>{product.subtitle}</td>
              <td>{product.author}</td>
              <td>{product.published}</td>
              <td>{product.publisher}</td>
              <td>{product.pages}</td>
              <td>{product.description}</td>
              <td>{product.website}</td>
              <td>{product.created_at}</td>
              <td>{product.updated_at}</td>
              <td className="flex">
                <div className="mr-1">
                  <UpdateProduct {...product} />
                </div>

                <DeleteProduct {...product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
