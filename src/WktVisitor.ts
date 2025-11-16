import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./LineString";

export default class WktVisitor implements GeometryVisitor {

    private buffer: string;

    constructor() {
        this.buffer = "";
    }

    visitPoint(point: Point) {
        if (point.isEmpty()) {
            this.buffer = "POINT()";
        } else {
            this.buffer = `POINT(${point.x()} ${point.y()})`;
        }
    }

    visitLineString(lineString: LineString) {
        if (lineString.isEmpty()) {
            this.buffer = "LINESTRING()";
        } else {
            const parts: string[] = [];
            for (let i = 0; i < lineString.getNumPoints(); i++) {
                const point = lineString.getPointN(i);
                parts.push(`${point.x()} ${point.y()}`);
            }
            this.buffer = `LINESTRING(${parts.join(', ')})`;
        }
    }

    getResult(): string {
        return this.buffer;
    }

}