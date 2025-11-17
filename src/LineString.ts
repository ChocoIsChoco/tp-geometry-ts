import Point from "./Point";
import GeometryVisitor from "./GeometryVisitor";
import AbstractGeometry from "./AbstractGeometry";

export default class LineString extends AbstractGeometry {
  private points?: Array<Point>;

  constructor(points?: Array<Point>) {
    super();
    this.points = points || [];
  }

  getNumPoints(): number {
    return this.points.length;
  }

  getPointN(n: number): Point {
    return this.points[n];
  }

  getType(): string {
    return "LineString"
  }

  isEmpty(): boolean {
    return this.points.length == 0;
  }

  translate(dx: number, dy: number): void {
    for (let point of this.points)
      point.translate(dx, dy);

  };

  clone(): LineString {
    return new LineString([... this.points]);
  }

  accept(visitor: GeometryVisitor) {
    visitor.visitLineString(this)
  }

}