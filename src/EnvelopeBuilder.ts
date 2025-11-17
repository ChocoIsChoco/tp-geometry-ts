import Coordinate from "./Coordinate";
import Envelope from "./Envelope"
import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./LineString";

export default class EnvelopeBuilder implements GeometryVisitor{

    private xVals: number[];
    private yVals: number[];


    constructor(xVals?: number[], yVals?: number[]) {
        this.xVals = xVals || [];
        this.yVals = yVals || [];
    }

    insert(coordinate : Coordinate) : void{
        if ( coordinate.length == 0 ){
            return ;
        }
        this.xVals.push(coordinate[0]);
        this.yVals.push(coordinate[1]);
    }

     visitPoint(point: Point): void {
        if (!point.isEmpty()) {
            this.insert([point.x(), point.y()]);
        }
    }

      visitLineString(lineString: LineString): void {
        if (!lineString.isEmpty()) {
            for (let i = 0; i < lineString.getNumPoints(); i++) {
                const point = lineString.getPointN(i);
                if (!point.isEmpty()) {
                    this.insert([point.x(), point.y()]);
                }
            }
        }
    }

    build(): Envelope {
        if ( this.xVals.length == 0 ){
            return new Envelope();
        }
        const xMin = Math.min(...this.xVals);
        const xMax = Math.max(...this.xVals);
        const yMin = Math.min(...this.yVals);
        const yMax = Math.max(...this.yVals);
        return new Envelope([xMin, yMin], [xMax, yMax]) 

    }

}