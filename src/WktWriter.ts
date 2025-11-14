import Geometry from "./Geometry";
import LineString from "./LineString";
import Point from "./Point";

export default class WktWriter {


    write(geometry: Geometry): string {

        if (geometry instanceof Point) {
            if (geometry.isEmpty()) {
                return "POINT()";
            }

            return `POINT(${geometry.x()} ${geometry.y()})`;
        }

        if (geometry instanceof LineString) {
            if (geometry.isEmpty()) {
                return "LINESTRING()";
            }
            const parts = [];
            for (let i = 0; i < geometry.getNumPoints(); i++){
                const point = geometry.getPointN(i);
                parts.push(`${point.x()} ${point.y()}`)
            }
            return `LINESTRING(${parts.join(',')})`;
        }
        
        throw new TypeError("geometry type not supported");
    }
}
