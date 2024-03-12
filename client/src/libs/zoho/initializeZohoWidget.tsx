import { Dispatch, SetStateAction } from "react";
import { DataEntityType } from "../../types";

export const initializeZohoWidget = async (setDataEntity: Dispatch<SetStateAction<DataEntityType | undefined>>) => {

    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        ZOHO.embeddedApp.on("PageLoad", async function (data) {
            console.log("################################")
            console.log("initialize drinxx widgets")
            if (data && data.Entity) {
                console.log("data entity: ", data)
                const { Entity, EntityId } = data;
                setDataEntity({ Entity, EntityId: EntityId[0] });
            }
        })
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        await ZOHO.embeddedApp.init();
    }
    catch (error) {
        console.error('Failed to initialize widget:', error);
    }
} 