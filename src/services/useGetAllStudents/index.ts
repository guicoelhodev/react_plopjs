import { useInfiniteQuery } from 'react-query';
import { API } from 'services/api.ts';
import { toast } from 'react-toastfy';

interface IParams {};
interface IHookParams {
  params: IParams;
  hiddenToastfy?: boolean;
}

type IResponse = {};
const getAllStudents = async(params: IParams, pageParam: number) => {

  try {
    const response = API.get(``);
    return response.data as IResponse;
  }catch (error) {
    throw new Error('An exeption has occurried, check the network')
  }
};

export const useGetAllStudents = ({ params, hiddenToastfy = false }: IHookParams) => {
  return useInfiniteQuery(['getAllStudents'], async({ pageParam = 0}) => {

    if(hiddenToastfy) {
      return getAllStudents(params, pageParam)
    };

    return toast.promise(() => getAllStudents(params, pageParam), {
      error: 'Erro',
      pending: 'Pendente',
      success: 'Sucesso'
    })
  }, {
     getNextPageParam: (lastPage, pages ) => {
        if (lastPage?.data?.length < 60) return undefined;
        return pages?.length;
      },
  });
};

