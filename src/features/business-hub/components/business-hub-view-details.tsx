import { GetBusinessHubResponse } from '../schema';
import { CardList } from '@/components/card-list';


interface BusinessHubViewDetailsProps {
    businessHub: GetBusinessHubResponse;
}

export function BusinessHubViewDetails({
                                          businessHub,
                                      }: BusinessHubViewDetailsProps) {
    const businessHubs = [
        {
            header: 'ID',
            body: businessHub?.businessUnitId ?? "N/A",
        },{
            header: 'Business Unit Name',
            body: businessHub?.businessUnitName ?? "N/A",
        },
        {
            header: 'Region',
            body: businessHub?.region ?? "N/A",
        },
        {
            header: 'State',
            body: businessHub?.state ?? "N/A",
        },
        {
            header: 'Contact Person',
            body: businessHub?.contactPerson ?? "N/A",
        }
    ]

    return (
        <><CardList items={businessHubs} /></>
    );
}