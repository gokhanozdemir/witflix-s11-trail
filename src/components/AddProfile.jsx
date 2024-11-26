export default function AddProfile(props) {
  const { demoData, addCallBackFn } = props;
  return (
    <div onClick={() => addCallBackFn(demoData)} className="profile">
      <img src="/images/CirclePlus.svg" />
      Add Profile
    </div>
  );
}
