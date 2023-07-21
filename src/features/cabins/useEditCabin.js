import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCabins';
import { toast } from 'react-toastify';

export function useEditCabin() {
  const queryClient = useQueryClient();

  // mutation fn only accepst 1 argument
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin Successfully edited');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: (err) => toast(err.message),
  });

  return { editCabin, isEditing };
}
