import {GetBusinessHubResponse} from "@/features/business-hub/schema";
import {BusinessHubFormDrawer, BusinessHubViewDetails} from "@/features/business-hub";
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuItemDeleteModal, DropdownMenuItemFormWizardDrawer,
    DropdownMenuItemViewDrawer
} from "@/components/dropdown-menu";
import {EllipsisIconButton} from "@/components/icon-button";
import {useDeleteBusinessHub} from "@/features/business-hub/api";

interface Props {
    businessHub: GetBusinessHubResponse
}

export function BusinessTableFx({ businessHub }: Props) {
    const deleteMutation = useDeleteBusinessHub();
    return(

            <DropdownMenu buttonTrigger={<EllipsisIconButton />} >
                {/*<BusinessHubViewDrawer businessHub={businessHub}/>*/}
                <DropdownMenuItem>
                    <DropdownMenuItemViewDrawer title='Business Hub Details'>
                        <BusinessHubViewDetails businessHub={businessHub} />
                    </DropdownMenuItemViewDrawer>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <DropdownMenuItemFormWizardDrawer render={
                        ({
                            close, isOpen, open
                        }) =>(
                            <BusinessHubFormDrawer isOpen={isOpen} open={open} close={close} businessHub={businessHub} />
                        )
                    } />
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <DropdownMenuItemDeleteModal mutation={deleteMutation} id={{businessUnitId: businessHub?.businessUnitId}} />
                </DropdownMenuItem>
                {/*<DropdownMenuItem>*/}
                {/*    <DropdownMenuItemViewDrawer title='Business Hub Details'>*/}
                {/*        <p>Update</p>*/}
                {/*        /!*<GiveAwayViewDetails businessHub={businessHub}/>*!/*/}
                {/*    </DropdownMenuItemViewDrawer>*/}
                {/*</DropdownMenuItem>*/}
            </DropdownMenu>

    )
}