
import {DataTable} from "@/components/data-table";
import {createColumnHelper} from "@tanstack/table-core";
import {GetBusinessHubResponse} from "@/features/business-hub/schema";
import {BusinessTableFx} from "@/features/business-hub";

export function BusinessHubTableExt(){
    const columnHelper = createColumnHelper<GetBusinessHubResponse>()

    const columns = [
        columnHelper.accessor('businessUnitId',{header:'ID'}),
        columnHelper.accessor('businessUnitName', {header:'Business Unit Name'}),
        columnHelper.accessor('region',{header:'Region'}),
        columnHelper.accessor('state', {header:'State'}),
        columnHelper.accessor('contactPerson', {header: 'Contact Person'}),
        columnHelper.display({id:'actions', header:'Action',
            cell:(props: any) => <BusinessTableFx businessHub={props.row.original} />
        })
    ]
    return (
        <>
            <DataTable  url={`business-units`} columns={columns}></DataTable>
        </>
    )
}