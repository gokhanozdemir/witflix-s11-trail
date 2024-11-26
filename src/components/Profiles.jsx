import Profile from './Profile';
import AddProfile from './AddProfile';

import { useGetProfiles } from '../services/queries';
import { useAddProfile } from '../services/mutations';

function Profiles() {
  const sampleUser = {
    name: 'Dev Frontend Gökhan',
    avatarImageID: Date.now(),
  };

  // Queries
  const { data: usersTanstackResponse, error, isPending } = useGetProfiles();

  // Mutations
  const { mutate, isPending: isMutationPending } = useAddProfile();

  const handleAddUser = (userData) => {
    console.log('userAdding', userData);
    mutate(userData);
  };

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      {/* // Optional chaining in js 
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
      */}
      {usersTanstackResponse?.data.map((user, ind) => (
        <Profile key={ind} kisi={user} />
      ))}
      {isMutationPending ? 'Adding new Profile' : ''}
      <AddProfile addCallBackFn={handleAddUser} demoData={sampleUser} />
    </>
  );
}

export default Profiles;
