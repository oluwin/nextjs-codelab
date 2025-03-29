import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {useEffect, useState} from "react";
import {getBusinessHubs} from "@/features/business-hub/api";

export function BusinessHubTable(){
    const [businessHubs, setBusinessHubs] = useState([])

    useEffect(()=>{
        getData();
    },[])

    const getData = async () => {
        const res = await getBusinessHubs();
        setBusinessHubs(res.data)
    }

    return (
        <>
            <h3 className="text-3xl font-bold">Buiness Hub List</h3>
            <Table>
                <TableCaption>Business Hubs</TableCaption>
                <TableHeader>
                    <TableRow>
                        {/*<TableHead className="w-[100px]">S/N</TableHead>*/}
                        <TableHead>S/N</TableHead>
                        <TableHead>Business Unit Name</TableHead>
                        <TableHead>Region</TableHead>
                        <TableHead>State</TableHead>
                        <TableHead>Contact Person</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {businessHubs && businessHubs.map((hub: any, index: number) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell>{hub.businessUnitName}</TableCell>
                            <TableCell>{hub.region}</TableCell>
                            <TableCell>{hub.state}</TableCell>
                            <TableCell>{hub.contactPerson}</TableCell>
                            <TableCell className="text-right"><a href="#">View</a></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}