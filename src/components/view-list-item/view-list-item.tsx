// import { DocumentFileListView } from "@/features/documents";

interface ViewListItemProps {
  item: {
    header: string;
    body: any;
    isDocument?: boolean;
  };
}

export function ViewListItem({
  item,
}: ViewListItemProps) {
  return (
    <div className="mb-4">
      <p className="text-gray-900 text-sm">
        {item.header}
      </p>
      <div className="text-gray-900 text-sm font-semibold">
        {/* {item?.isDocument ? (
          <div className="mt-2 font-normal">
            <DocumentFileListView
              documentFiles={item.body}
            />
          </div>
        ) : ( */}
          item.body
        {/* )} */}
      </div>
    </div>
  );
}
