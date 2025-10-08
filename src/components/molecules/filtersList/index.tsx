import { Filter, FilterProps } from "@/components/atoms/filter";
import "./filterList.css";

interface Props {
  filterCards: FilterProps[];
}

export const FilterList = ({ filterCards }: Props) => {
  return (
    <div className="FilterList">
      <div className="FilterListText">
        {filterCards.map((card, index) => (
          <Filter key={index} {...card} />
        ))}
      </div>
    </div>
  );
};
