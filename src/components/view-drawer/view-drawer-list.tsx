interface Item {
  header: string;
  body: any;
  isDocument?: boolean;
}

interface CardListProps {
  items: Item[];
}
export function ViewDrawerList({ items }: CardListProps) {
  return (
    <div className="">
      <dl className="divide-y divide-gray-100">
        {items.map((item) => (
          <div
            className="px-4 py-4 sm:grid sm:grid-cols-6 sm:gap-6 sm:pr-4"
            key={item.header}
          >
            <dt className="text-sm font-medium text-gray-900 sm:col-span-2 ">
              {item.header}
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-4 sm:mt-0">
              {item.body}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
