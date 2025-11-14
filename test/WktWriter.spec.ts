import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import WktWriter from "../src/WktWriter"
import LineString from "../src/LineString";
import Geometry from "../src/Geometry";

describe("test WktWriter", () => {


    it("test with WktWriter for Point", () => {
        const writer = new WktWriter();

        const p = new Point()
        const g = new Point([3.0, 4.0]);

        const wkt1 = writer.write(p);
        const wkt2 = writer.write(g)
        expect(wkt1).to.deep.equal("POINT()");
        expect(wkt2).to.deep.equal("POINT(3 4)");

    });

    it("test with WktWriter for LineString", () => {
        const writer = new WktWriter();

        const l12 = new LineString()

        const p = new Point([1.0, 2.0])
        const g = new Point([3.0, 4.0]);
        const l = new LineString([p,g])

        const wkt1 = writer.write(l12);
        const wkt2 = writer.write(l);
       
        expect(wkt1).to.deep.equal("LINESTRING()");
        expect(wkt2).to.deep.equal("LINESTRING(1 2,3 4)");

    });

});
