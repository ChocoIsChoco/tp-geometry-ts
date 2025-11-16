import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import Geometry from "./Geometry";
import EnvelopeBuilder from "./EnvelopeBuilder";
import GeometryVisitor from "./GeometryVisitor";

export default class Point implements Geometry{
  private coordinate?: Coordinate;

  constructor(coordinate?: Coordinate) {
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

  getEnvelope(): Envelope {
    const builder = new EnvelopeBuilder();
    builder.insert(this.coordinate)
    return builder.build();
  }

  x(): number {
    return this.coordinate[0];
  }

  y(): number {
    return this.coordinate[1];
  }

  accept(visitor: GeometryVisitor) {
    visitor.visitPoint(this)
  }

}
