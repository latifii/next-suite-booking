import { getCabins } from "../_core/data-service";
import CabinCard from "./CabinCard";

async function CabinList({ filter }) {
  const cabins = await getCabins();

  let capacityItem;
  if (filter === "all") capacityItem = cabins;
  if (filter === "small")
    capacityItem = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === "medium")
    capacityItem = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  if (filter === "large")
    capacityItem = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {capacityItem.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
