import { useQuery } from '@tanstack/react-query';
import { getProfiles } from './api.js';

export const useGetProfiles = () => {
  // Queries
  return useQuery({
    queryKey: ['profiles'],
    queryFn: getProfiles,
  });
};
