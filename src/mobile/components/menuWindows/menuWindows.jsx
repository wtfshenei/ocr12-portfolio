import React, {forwardRef} from 'react';
import {AppIcon, AppName, NoAppsMessage, OpenAppsModal} from "./menuWindows.styled";
import {getIconComponent} from "../../../utils/iconSelector";

const MenuWindows = forwardRef(({ openApps, onSelectApp }, ref) => {
    // Vérifie si la liste des applications ouvertes est vide
    const hasApps = openApps.length > 0;

    return (
        <OpenAppsModal ref={ref}>
            {hasApps ? (
                openApps.map(app => (
                    <AppIcon key={app.id} onClick={() => onSelectApp(app.id)}>
                        {getIconComponent(app.iconType)}
                        <AppName>{app.name}</AppName>
                    </AppIcon>
                ))
            ) : (
                <NoAppsMessage>Aucune app ouverte.</NoAppsMessage>
            )}
        </OpenAppsModal>
    );
});

export default MenuWindows;