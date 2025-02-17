/// <reference types="react" />
import { ISettings } from '../../../types';
export interface Props {
    isPollingSchema: boolean;
    isReloadingSchema: boolean;
    onReloadSchema: () => any;
    settings: ISettings;
}
declare const _default: import("react-redux").ConnectedComponent<(props: Props) => JSX.Element, Pick<Props, "settings" | "isPollingSchema" | "onReloadSchema">>;
export default _default;
