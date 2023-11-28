import Thunderbird from "../containers/apps/thunderbird/thunderbird";
import Acrobatreader from "../containers/apps/acrobatreader/acrobatreader";
import Chrome from "../containers/apps/chrome/chrome";
import Vscode from "../containers/apps/vscode/vscode";

/**
 * Fonction qui sélectionne le contenu de l'app en question.
 */
export const getContentComponent = (contentType) => {
    const contentComponents = {
        thunderbird: <Thunderbird />,
        acrobatreader: <Acrobatreader />,
        chrome: <Chrome />,
        vscode: <Vscode />
    }
    return contentComponents[contentType]
}