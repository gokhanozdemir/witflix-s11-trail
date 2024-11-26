import { addProfile } from './api.js';

import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useAddProfile = () => {
  // Access the client
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addProfile,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['profiles'] });
    },
  });
};
