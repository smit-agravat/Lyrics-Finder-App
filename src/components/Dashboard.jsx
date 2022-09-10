import Tracks from "./Tracks";
import Search from "./Search";

export default function Dashboard() {
  return (
    <>
      <div className="container col-12 bg-transparent">
        <Search />
        <Tracks />
      </div>
    </>
  );
}
