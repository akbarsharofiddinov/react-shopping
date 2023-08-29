import { useParams } from "react-router-dom";
import { useGetProductQuery } from "@store/apiRTK/apiRTK";
import { DetailComponent, NotComponent } from "@components/index";
import NotDetailImg from "@assets/not-products/not-detail.svg";

function DetailProduct() {
  const { id } = useParams();

  const {
    data,
    isLoading: loading,
    isError,
  } = useGetProductQuery(id!, {
    skip: id ? false : true,
  });

  return (
    <section className="min-h-[50vh] py-[27px] md:py-[35px] lg:py-[50px]">
      <div className="container">
        {data ? (
          <DetailComponent data={data} loading={loading} />
        ) : (
          <NotComponent
            img={NotDetailImg}
            title="Страница не найдена"
            description="Возможно, вы ввели неверный адрес. Попробуйте воспользоваться поиском или перейдите на"
            isButton={true}
          />
        )}
      </div>
    </section>
  );
}

export default DetailProduct;
