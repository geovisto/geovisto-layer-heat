import { ILayerToolProps } from "geovisto";
import IHeatLayerToolDimensions from "./IHeatLayerToolDimensions";

type IHeatLayerToolProps = ILayerToolProps & {
    dimensions?: IHeatLayerToolDimensions;
};

export default IHeatLayerToolProps;
