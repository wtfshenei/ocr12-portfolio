import ThunderbirdIcon from "../containers/apps/thunderbird/thunderbirdIcon";
import AcrobatreaderIcon from "../containers/apps/acrobatreader/acrobatreaderIcon";
import ChromeIcon from "../containers/apps/chrome/chromeIcon";
import VscodeIcon from "../containers/apps/vscode/vscodeIcon";

/**
 * Fonction qui sélectionne l'icône de l'app en question.
 */
export const getIconComponent = (iconType) => {
    const iconComponents = {
        thunderbird: <ThunderbirdIcon />,
        acrobatreader: <AcrobatreaderIcon />,
        chrome: <ChromeIcon />,
        vscode: <VscodeIcon />
    }
    return iconComponents[iconType]
}