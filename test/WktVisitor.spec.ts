import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktVisitor from "../src/WktVisitor";

describe("test WktVisitor", () => {

    it("should work with empty Point", () => {
        const visitor = new WktVisitor();
        const geometry = new Point();
        geometry.accept(visitor);
        const wkt  = visitor.getResult();

        expect(wkt).to.equal("POINT()");
    });

    it("test with WktVisitor for Point", () => {
        const visitor = new WktVisitor();
        const geometry = new Point([2.0, 3.0]);
        geometry.accept(visitor);
        const wkt  = visitor.getResult();

        expect(wkt).to.equal("POINT(2 3)");
    });

    it("test with WktVisitor for LineString void", () => {
        const visitor = new WktVisitor();
        const geometry = new LineString();
        geometry.accept(visitor);
        const wkt  = visitor.getResult();

        expect(wkt).to.equal("LINESTRING()");
    });

    it("test with WktVisitor for LineString", () => {
        const visitor = new WktVisitor();
        const geometry1 = new Point([2.0, 3.0]);
        const geometry2 = new Point([4.0, 5.0]);
        const geometry = new LineString([geometry1, geometry2]);
        geometry.accept(visitor);
        const wkt  = visitor.getResult();

        expect(wkt).to.equal("LINESTRING(2 3, 4 5)");
    });

});