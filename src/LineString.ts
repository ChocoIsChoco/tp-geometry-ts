import Coordinate from "./Coordinate";
import Geometry from "./Geometry";
import Point from "./Point";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";

export default class LineString implements Geometry {
  private points?: Array<Point>;

  constructor(points?: Array<Point>) {
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

  getEnvelope(): Envelope {
    const builder = new EnvelopeBuilder();
    for (let point of this.points) {
      if (!point.isEmpty()){
        builder.insert([point.x(), point.y()])
      }

    }
    return builder.build();

  }

}