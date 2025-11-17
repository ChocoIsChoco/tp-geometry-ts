import Coordinate from "./Coordinate";
import GeometryVisitor from "./GeometryVisitor";
import AbstractGeometry from "./AbstractGeometry";

export default class Point extends AbstractGeometry{
  private coordinate?: Coordinate;

  constructor(coordinate?: Coordinate) {
    super();
    this.coordinate = coordinate || [];
   
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  getType(): string {
    return "Point"
  }

  isEmpty(): boolean {
    return this.coordinate.length == 0;
  }

  translate(dx: number, dy: number): void {
    this.coordinate[0] += dx;
    this.coordinate[1] += dy;

  }

  clone(): Point {
      
      return new Point([... this.coordinate]);
    }

  accept(visitor: GeometryVisitor) {
    visitor.visitPoint(this)
  }

  x(): number {
    return  this.coordinate[0];
  }

  y(): number {
    return this.coordinate[1];
  }

}
