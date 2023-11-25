import Thunderbird from "../containers/apps/thunderbird/thunderbird";
import Acrobatreader from "../containers/apps/acrobatreader/acrobatreader";
import Chrome from "../containers/apps/chrome/chrome";

export const getContentComponent = (contentType) => {
    const contentComponents = {
        thunderbird: <Thunderbird />,
        acrobatreader: <Acrobatreader />,
        chrome: <Chrome />
    }
    return contentComponents[contentType]
}