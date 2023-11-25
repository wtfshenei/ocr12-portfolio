import ThunderbirdIcon from "../containers/apps/thunderbird/thunderbirdIcon";
import AcrobatreaderIcon from "../containers/apps/acrobatreader/acrobatreaderIcon";
import ChromeIcon from "../containers/apps/chrome/chromeIcon";

export const getIconComponent = (iconType) => {
    const iconComponents = {
        thunderbird: <ThunderbirdIcon />,
        acrobatreader: <AcrobatreaderIcon />,
        chrome: <ChromeIcon />
    }
    return iconComponents[iconType]
}