import React from 'react';
import { useParams } from "react-router-dom";
import { useGetProductQuery } from '@store/apiRTK/apiRTK';
import { DetailComponent } from '@components/index';

const DetailProduct: React.FC = () => {

  const { id } = useParams();

  const { data, isError, isLoading } = useGetProductQuery(id!)

  return (
    <section className="section-app">
      <div className="container">
        {
          isLoading ?
            <div className='absolute top-0 left-0 bottom-0 right-0 bg-[#00000065] backdrop-blur-[5px] z-50 flex items-center justify-center'>
              <span className="relative flex items-center justify-center h-[100px] w-[100px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-[75px] w-[75px] bg-[#eafaff]"></span>
              </span>
            </div>
            : isError ?
              <h1>Error</h1>
              : data ?
                <DetailComponent />
                : <h1>No Data</h1>
        }
      </div>
    </section>
  )
}

export default DetailProduct