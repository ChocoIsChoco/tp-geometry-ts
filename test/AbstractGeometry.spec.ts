import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("Geometry.asText()", () => {

    it("should return WKT for empty Point", () => {
        const p = new Point();
        const wkt = p.asText();

        expect(wkt).to.equal("POINT()");
    });

    it("should return WKT for Point", () => {
        const p = new Point([2.0, 3.0]);
        const wkt = p.asText();

        expect(wkt).to.equal("POINT(2 3)");
    });

    it("should return WKT for empty LineString", () => {
        const lineString = new LineString();
        const wkt = lineString.asText();

        expect(wkt).to.equal("LINESTRING()");
    });

    it("should return WKT for LineString", () => {
        const p1 = new Point([1.0, 2.0]);
        const p2 = new Point([3.0, 4.0]);
        const lineString = new LineString([p1, p2]);
        const wkt = lineString.asText();

        expect(wkt).to.equal("LINESTRING(1 2, 3 4)");
    });
});