import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { deleteCabin as deleteCabinApi } from '../../services/apiCabins';

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast('cabin successfuly deleted');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    }, // refetcing by invalidation
    onError: (err) => toast(err.message),
  });

  return { isDeleting, deleteCabin };
}
